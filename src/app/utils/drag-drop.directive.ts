import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[lpDragDrop]',
})
export class DragDropDirective {
  @Output() readonly dragOver = new EventEmitter<void>();
  @Output() readonly dragLeave = new EventEmitter<void>();
  @Output() readonly dropFile = new EventEmitter<DragEvent>();

  @HostListener('dragover', ['$event']) public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver.emit();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragLeave.emit();
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropFile.emit(event);
  }
}
