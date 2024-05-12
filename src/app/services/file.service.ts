import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { createWorker, createScheduler } from 'tesseract.js';
import { Record } from '../models/record.model';
import { gradingSystem } from '../models/grading-system.const';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  scheduler = createScheduler();

  async getDataAsPromise$(files: File[]): Promise<Tesseract.RecognizeResult[]> {
    const workerList = Array(files?.length);
    for (let i = 0; i < workerList?.length; i++) {
      workerList[i] = this.addWorker();
    }
    await Promise.all(workerList);
    const results = await Promise.all(
      (files || []).map((file) => this.scheduler.addJob('recognize', file))
    );
    await this.scheduler.terminate();
    return results;
  }

  async addWorker() {
    const worker = await createWorker('eng');
    this.scheduler.addWorker(worker);
  }

  getData$(files: File[]): Observable<Record[]> {
    return from(this.getDataAsPromise$(files)).pipe(
      map((results) => this.processedExtractedData(results))
    );
  }

  private processedExtractedData(
    results: Tesseract.RecognizeResult[]
  ): Record[] {
    let processedRecords: Record[] = [];
    (results || []).forEach((result) => {
      const records = (result.data?.lines || []).map((line) => {
        let grade: string, gradeIndex: number, credit: string;
        const wordTexts = line.words.map((word) => word.text);
        grade = (wordTexts || []).find((text, i) => {
          if (this.isValidGrade(text)) {
            gradeIndex = i;
            return true;
          }
          return false;
        });

        if (!gradeIndex) {
          gradeIndex = wordTexts.length;
        } else {
          credit = wordTexts[gradeIndex + 1];
          if (!parseInt(credit)) {
            credit = undefined;
          }
        }

        const subject = wordTexts
          .slice(0, gradeIndex)
          .join(' ')
          .replaceAll('~', '')
          .trim();

        return {
          subject,
          grade,
          credit,
        };
      });
      processedRecords = processedRecords.concat(records);
    });
    return processedRecords;
  }

  private isValidGrade(text: string): boolean {
    return gradingSystem.some((grade) => {
      const formattedText = text.replace(/[^0-9]/g, '');
      return (
        formattedText.split('').length === 3 &&
        formattedText.includes(grade.replace('.', '')) &&
        parseInt(formattedText)
      );
    });
  }
}
