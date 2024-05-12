import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTrackerComponent } from './wizard-tracker.component';

describe('WizardTrackerComponent', () => {
  let component: WizardTrackerComponent;
  let fixture: ComponentFixture<WizardTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WizardTrackerComponent]
    });
    fixture = TestBed.createComponent(WizardTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
