import { Component } from '@angular/core';
import { FileService } from './services/file.service';
import { take } from 'rxjs';
import { Record } from './models/record.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  files: File[];
  isUploading = false;
  records: Record[];
  stepCount = 1;
  recordForms: FormArray;
  gradeWeightedAverage: string;

  constructor(private fileService: FileService) {}

  onFileChange(files: File[]): void {
    this.files = files;
  }

  upload(): void {
    this.isUploading = true;
    this.fileService
      .getData$(this.files)
      .pipe(take(1))
      .subscribe((records) => {
        this.records = records;
        this.updateRecordForms(this.records);
        this.isUploading = false;
        this.stepCount += 1;
      });
  }

  calculate(): void {
    let totalCredit = 0;
    let totalWeightedValue = 0;
    this.recordForms.controls.forEach((formGroup) => {
      const grade = parseFloat(
        (formGroup as FormGroup).controls['grade'].value
      );
      const credit = parseInt(
        (formGroup as FormGroup).controls['credit'].value
      );
      if (grade && credit) {
        totalCredit += credit;
        const weightedValue = grade * credit;
        totalWeightedValue += weightedValue;
      }
    });
    this.gradeWeightedAverage = (totalWeightedValue / totalCredit).toFixed(2);
    this.stepCount = 3;
  }

  reset(): void {
    this.stepCount = 1;
  }

  back(): void {
    this.stepCount -= 1;
  }

  onDeleteRow(index: number): void {
    this.recordForms.removeAt(index);
  }

  private updateRecordForms(records: Record[]): void {
    this.recordForms = new FormArray(
      (records || []).map(
        (record) =>
          new FormGroup({
            subject: new FormControl(record.subject, Validators.required),
            grade: new FormControl(record.grade),
            credit: new FormControl(record.credit),
          })
      )
    );
  }
}
