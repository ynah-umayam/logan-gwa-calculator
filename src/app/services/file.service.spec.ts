import { TestBed } from '@angular/core/testing';

import { FileService } from './file.service';
import { mockRecords } from '../models/mocks/record.mock';
import * as Tesseract from 'tesseract.js';
import {
  mockLineWithIncGrade,
  mockLineWithNoCredit,
  mockLineWithNoGrade,
  mockPage,
  mockRecognizeResult,
} from '../models/mocks/tesseract.mock';

const createFakeFile = (fileName: string = 'test'): File => {
  const blob = new Blob([''], { type: 'image/bmp' });
  blob['lastModifiedDate'] = '';
  blob['name'] = fileName;
  return <File>blob;
};

const mockFiles = [createFakeFile('test1')];

describe('FileService', () => {
  let service: FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileService);
  });

  it('should call recognize job of tesseract scheduler', (done) => {
    jest
      .spyOn(service.scheduler, 'addJob')
      .mockReturnValue(Promise.resolve(undefined));
    jest.spyOn(service.scheduler, 'addWorker').mockReturnValue('test');
    jest
      .spyOn(service.scheduler, 'terminate')
      .mockReturnValue(Promise.resolve(undefined));
    jest
      .spyOn(Tesseract, 'createWorker')
      .mockReturnValue(Promise.resolve(undefined));

    service.getDataAsPromise$(mockFiles).then(() => {
      expect(service.scheduler.addJob).toHaveBeenCalled();
      done();
    });
  });
  it('should process extracted data', (done) => {
    jest
      .spyOn(service, 'getDataAsPromise$')
      .mockReturnValue(Promise.resolve([mockRecognizeResult]));
    service.getData$(mockFiles).subscribe((data) => {
      expect(data).toEqual([
        {
          credit: '3',
          grade: '2.00',
          subject: 'COEN 3253 DESIGN PROJECT 1',
        },
      ]);
      done();
    });
  });
  it('should return empty array if data is undefined', (done) => {
    jest.spyOn(service, 'getDataAsPromise$').mockReturnValue(
      Promise.resolve([
        {
          jobId: 'Job-4-69c88',
          data: undefined,
        },
      ])
    );
    service.getData$(mockFiles).subscribe((data) => {
      expect(data).toEqual([]);
      done();
    });
  });
  it('should return subject if grade does not exist', (done) => {
    jest.spyOn(service, 'getDataAsPromise$').mockReturnValue(
      Promise.resolve([
        {
          jobId: 'Job-4-69c88',
          data: { ...mockPage, lines: [mockLineWithNoGrade] },
        },
      ])
    );
    service.getData$(mockFiles).subscribe((data) => {
      expect(data).toEqual([
        {
          credit: undefined,
          grade: undefined,
          subject: 'COEN 3253 DESIGN PROJECT 1',
        },
      ]);
      done();
    });
  });
  it('should process incomplete grade', (done) => {
    jest.spyOn(service, 'getDataAsPromise$').mockReturnValue(
      Promise.resolve([
        {
          jobId: 'Job-4-69c88',
          data: { ...mockPage, lines: [mockLineWithIncGrade] },
        },
      ])
    );
    service.getData$(mockFiles).subscribe((data) => {
      expect(data).toEqual([
        {
          credit: '3',
          grade: 'INC/2.75',
          subject: 'COEN 3253 DESIGN PROJECT 1',
        },
      ]);
      done();
    });
  });
  it('should not set credit to undefined of it does not exist', (done) => {
    jest.spyOn(service, 'getDataAsPromise$').mockReturnValue(
      Promise.resolve([
        {
          jobId: 'Job-4-69c88',
          data: { ...mockPage, lines: [mockLineWithNoCredit] },
        },
      ])
    );
    service.getData$(mockFiles).subscribe((data) => {
      expect(data).toEqual([
        {
          credit: undefined,
          grade: '2.00',
          subject: 'COEN 3253 DESIGN PROJECT 1',
        },
      ]);
      done();
    });
  });
});
