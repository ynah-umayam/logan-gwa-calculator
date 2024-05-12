import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lp-file-upload',
  templateUrl: './file-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
  @Output() fileChanged = new EventEmitter();
  files: File[] = [];
  isDraggingFile$ = new BehaviorSubject(false);

  browseFile(event): void {
    const files = event.target.files;
    this.updateFiles(files);
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
    this.fileChanged.emit(this.files);
  }

  dragOverFile(): void {
    this.isDraggingFile$.next(true);
  }

  dragLeaveFile(): void {
    this.isDraggingFile$.next(false);
  }

  dropFile(event: DragEvent): void {
    const files = Array.from(event.dataTransfer.files);
    this.updateFiles(files);
    this.isDraggingFile$.next(false);
  }

  private updateFiles(files: File[]): void {
    for (const file of files) {
      this.files.push(file);
    }
    this.fileChanged.emit(this.files);
  }
}
