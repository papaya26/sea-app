import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { AppStore } from '@app/core/store/app.store';

@Injectable()
export class HttpService {
  private httpHeaders: any;

  constructor(private httpClient: HttpClient, private appStore: AppStore) {
    // this.httpHeaders = {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${window.localStorage.getItem('token')}`
    // };
  }

  private createHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.appStore.token$
        ? `Bearer ${this.appStore.token$}`
        : undefined
    });
  }

  public post(url, payload) {
    this.appStore.isLoading(true);
    return this.httpClient
      .post(`${environment.api}${url}`, payload, {
        // headers: {
        //   ...this.httpHeaders,
        //   ...{ Authorization: `Bearer ${this.appStore.token$}` }
        // }
        headers: this.createHeaders()
      })
      .pipe(
        flatMap(res => this.handleSuccess(res)),
        catchError(err => this.handleError(err))
      );
  }

  public put(url, payload) {
    this.appStore.isLoading(true);
    return this.httpClient
      .put(`${environment.api}${url}`, payload, {
        // headers: {
        //   ...this.httpHeaders,
        //   ...{ Authorization: `Bearer ${this.appStore.token$}` }
        // }
        headers: this.createHeaders()
      })
      .pipe(
        flatMap(res => this.handleSuccess(res)),
        catchError(err => this.handleError(err))
      );
  }

  public delete(url) {
    this.appStore.isLoading(true);
    return this.httpClient
      .delete(`${environment.api}${url}`, {
        headers: this.httpHeaders
      })
      .pipe(
        flatMap(res => this.handleSuccess(res)),
        catchError(err => this.handleError(err))
      );
  }

  public get(url) {
    return this.httpClient
      .get(`${environment.api}${url}`, {
        // headers: {
        //   ...this.httpHeaders,
        //   ...{ Authorization: `Bearer ${this.appStore.token$}` }
        // }
        headers: this.createHeaders()
      })
      .pipe(
        flatMap(res => this.handleSuccess(res)),
        catchError(err => this.handleError(err))
      );
  }

  private handleSuccess(res) {
    this.appStore.isLoading(false);
    return of(res);
  }

  private handleError(err) {
    this.appStore.isLoading(false);
    this.appStore.error$ =
      err && err.error
        ? err.error.message || 'Opss! Something went wrong'
        : 'Opss! Something went wrong';
    return throwError(err.error);
  }
}
