import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

import { api } from '@app/config';

import { HttpService } from '@app/core/services';

import { AppStore } from '@app/core/store/app.store';
import { InternalStore } from '@app/internal/internal.store';

@Component({
  selector: 'app-internal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  @ViewChild('ckeditor')
  public ckeditor: any;

  public ckeConfig: any;
  public emailForm: FormGroup;
  public emailRegex: RegExp;
  public sending: boolean;

  readonly separatorKeysCodes: number[];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private appStore: AppStore,
    public internalStore: InternalStore
  ) {
    this.ckeConfig = {
      resize_enabled: false
    };
    this.separatorKeysCodes = [COMMA, ENTER];
    this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.sending = false;
  }

  public ngOnInit() {
    this.buildEmailForm();
  }

  private buildEmailForm() {
    this.emailForm = this.formBuilder.group({
      receipients: [[]],
      subject: '',
      htmlEmail: ''
    });
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (this.emailRegex.test((value || '').trim())) {
      this.emailForm.get('receipients').value.push(value);
    } else {
    }

    if (input) {
      input.value = '';
    }
  }

  public remove(receipient: string): void {
    const index = this.emailForm.get('receipients').value.indexOf(receipient);

    if (index >= 0) {
      this.emailForm.get('receipients').value.splice(index, 1);
    }
  }

  public send() {
    this.sending = true;
    this.httpService.post(api.email, this.emailForm.value).subscribe(
      res => {
        this.appStore.success$ = 'Email Sent!';
        this.sending = false;
        this.emailForm.reset();
        this.changeDetectorRef.detectChanges();
      },
      err => {
        this.sending = false;
        this.changeDetectorRef.detectChanges();
      }
    );
  }
}
