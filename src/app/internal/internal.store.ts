import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';

@Injectable()
export class InternalStore {
  @observable
  public headerHeight$: number;

  @action
  public setHeaderHeight(height: number = 64) {
    this.headerHeight$ = height;
  }
}
