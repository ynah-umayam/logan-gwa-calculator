import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCreditTableComponent } from './grade-credit-table.component';

describe('GradeCreditTableComponent', () => {
  let component: GradeCreditTableComponent;
  let fixture: ComponentFixture<GradeCreditTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeCreditTableComponent],
    });
    fixture = TestBed.createComponent(GradeCreditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit rowDeleted', () => {
    jest.spyOn(component.rowDeleted, 'emit');
    component.deleteRow(0);
    expect(component.rowDeleted.emit).toHaveBeenCalled();
  });
});
