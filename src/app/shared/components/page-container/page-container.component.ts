import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContainerComponent {
  @Input()
  public headerHeight = 0;
}
