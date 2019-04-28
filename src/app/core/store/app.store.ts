import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { action, observable, reaction } from 'mobx';

@Injectable()
export class AppStore {
  @observable
  public token$ = '';

  @observable
  public isLoading$ = false;

  @observable
  public success$ = '';

  @observable
  public error$ = '';

  constructor(private matSnackBar: MatSnackBar) {
    this.setToken(window.localStorage.getItem('token'));

    reaction(
      () => this.success$,
      success => {
        if (success) {
          this.matSnackBar.open(success, 'OK', {
            duration: 2000,
            panelClass: 'success-snackbar'
          });
          this.success$ = '';
        }
      }
    );

    reaction(
      () => this.error$,
      error => {
        if (error) {
          this.matSnackBar.open(error, 'OK', {
            duration: 2000,
            panelClass: 'error-snackbar'
          });
          this.error$ = '';
        }
      }
    );
  }

  @action
  public setToken(token) {
    this.token$ = token;
    window.localStorage.setItem('token', token);
  }

  @action
  public clearToken() {
    this.token$ = '';
    window.localStorage.clear();
  }

  @action
  public isLoading(loading) {
    this.isLoading$ = loading;
  }
}
