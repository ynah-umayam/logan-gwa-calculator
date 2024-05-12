import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lp-wizard',
  templateUrl: './wizard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardComponent {
  @Input() stepCount = 1;
  @Input() isUploading = false;
}
