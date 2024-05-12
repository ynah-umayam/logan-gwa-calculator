import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lp-wizard-tracker',
  templateUrl: './wizard-tracker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardTrackerComponent {
  @Input() stepCount = 1;
}
