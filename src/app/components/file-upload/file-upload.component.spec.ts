import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';

const createFakeFile = (fileName: string = 'test'): File => {
  const blob = new Blob([''], { type: 'image/bmp' });
  blob['lastModifiedDate'] = '';
  blob['name'] = fileName;
  return <File>blob;
};

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadComponent],
    });
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit fileChanged with the updated file list after file selection', () => {
    jest.spyOn(component.fileChanged, 'emit');
    const mockFiles = [createFakeFile('test1'), createFakeFile('test2')];
    const mockEvent = {
      target: {
        files: [createFakeFile('test2')],
      },
    };
    component.files = [createFakeFile('test1')];
    component.browseFile(mockEvent);
    expect(component.fileChanged.emit).toHaveBeenCalledWith(mockFiles);
  });

  it('should emit fileChanged with the updated file list after file removal', () => {
    jest.spyOn(component.fileChanged, 'emit');
    const mockFiles = [createFakeFile('test2'), createFakeFile('test3')];
    component.files = [
      createFakeFile('test1'),
      createFakeFile('test2'),
      createFakeFile('test3'),
    ];
    component.removeFile(0);
    expect(component.fileChanged.emit).toHaveBeenCalledWith(mockFiles);
  });

  it('should emit fileChanged with the updated file list after file drop', () => {
    jest.spyOn(component.fileChanged, 'emit');
    const mockFiles = [createFakeFile('test1'), createFakeFile('test2')];
    const mockEvent = {
      dataTransfer: {
        files: [createFakeFile('test2')],
      },
    } as any;
    component.files = [createFakeFile('test1')];
    component.dropFile(mockEvent);
    expect(component.fileChanged.emit).toHaveBeenCalledWith(mockFiles);
  });

  it('should set isDraggingFile$ to true', (done) => {
    component.dragOverFile();
    component.isDraggingFile$.subscribe((value) => {
      expect(value).toBeTruthy();
      done();
    });
  });

  it('should set isDraggingFile$ to false', (done) => {
    component.dragLeaveFile();
    component.isDraggingFile$.subscribe((value) => {
      expect(value).toBeFalsy();
      done();
    });
  });
});
