import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FileService } from './services/file.service';
import { of } from 'rxjs';
import { mockRecords } from './models/mocks/record.mock';
import { AppModule } from './app.module';

const createFakeFile = (fileName: string = 'test'): File => {
  const blob = new Blob([''], { type: 'image/bmp' });
  blob['lastModifiedDate'] = '';
  blob['name'] = fileName;
  return <File>blob;
};

class MockFileService {
  getData$ = () => of(mockRecords);
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      declarations: [AppComponent],
      providers: [{ provide: FileService, useClass: MockFileService }],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update recordForms', () => {
    component.upload();
    expect(component.recordForms.value).toEqual(mockRecords);
  });
  it('should remove item from recordForms', () => {
    component.upload();
    component.onDeleteRow(1);
    expect(component.recordForms.value).toEqual([{ ...mockRecords[0] }]);
  });
  it('should calculate grade weighted average', () => {
    component.upload();
    component.calculate();
    expect(component.gradeWeightedAverage).toEqual('1.39');
  });
  it('should set step count to 3', () => {
    component.upload();
    component.calculate();
    expect(component.stepCount).toEqual(3);
  });
  it('should set step count to 1', () => {
    component.stepCount = 3;
    component.reset();
    expect(component.stepCount).toEqual(1);
  });
  it('should deduct 1 from step count to 2', () => {
    component.stepCount = 3;
    component.back();
    expect(component.stepCount).toEqual(2);
  });
  it('should set files', () => {
    component.onFileChange([createFakeFile('test1')]);
    expect(component.files).toEqual([createFakeFile('test1')]);
  });
});
