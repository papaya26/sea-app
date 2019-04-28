import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

import { appRoutes } from '@app/config';

import { AppStore } from '@app/core/store/app.store';
import { InternalStore } from '@app/internal/internal.store';

@Component({
  selector: 'app-internal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header', { read: ElementRef })
  public header: ElementRef;

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.updateHeaderHeight();
  }

  constructor(
    private router: Router,
    private appStore: AppStore,
    private internalStore: InternalStore
  ) {}

  public ngAfterViewInit() {
    this.updateHeaderHeight();
  }

  private updateHeaderHeight() {
    if (this.header) {
      this.internalStore.setHeaderHeight(
        this.header.nativeElement.clientHeight
      );
    }
  }

  public logout() {
    this.appStore.clearToken();
    this.router.navigate([`/${appRoutes.external}`]);
  }
}
