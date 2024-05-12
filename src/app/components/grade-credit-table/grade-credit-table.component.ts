import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Record } from 'src/app/models/record.model';

@Component({
  selector: 'lp-grade-credit-table',
  templateUrl: './grade-credit-table.component.html',
  styleUrls: ['./grade-credit-table.component.css'],
})
export class GradeCreditTableComponent {
  @Output() rowDeleted = new EventEmitter<number>();
  @Input() records: Record[];
  @Input() forms: FormArray;
  @Input() isEditable = false;

  deleteRow(index: number): void {
    this.rowDeleted.emit(index);
  }
}
