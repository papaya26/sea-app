import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalComponent {}
