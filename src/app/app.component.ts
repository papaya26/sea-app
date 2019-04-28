import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AppStore } from './core/store/app.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public appStore: AppStore) {}
}
