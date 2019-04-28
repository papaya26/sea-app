import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { appRoutes, api } from '@app/config';

import { ModalService, HttpService } from '@app/core/services';

import { CustomErrorStateMatcher, checkPasswords } from '@app/core/utilities';

import { AppStore } from '@app/core/store/app.store';

@Component({
  selector: 'app-external-sign-ign',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public errorMatcher: any;
  public lfPasswordVisibile: boolean;
  public rfPasswordVisibile: boolean;
  public rfConfirmPasswordVisibile: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private modalService: ModalService,
    private appStore: AppStore
  ) {
    this.errorMatcher = new CustomErrorStateMatcher();
    this.lfPasswordVisibile = false;
    this.rfPasswordVisibile = false;
    this.rfConfirmPasswordVisibile = false;
  }

  public ngOnInit() {
    this.buildLoginForm();
    this.buildRegisterForm();
  }

  private buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private buildRegisterForm() {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['']
      },
      { validator: checkPasswords }
    );
  }

  public login() {
    this.httpService
      .post(api.auth, this.loginForm.value)
      .subscribe((res: any) => {
        this.modalService.close();
        this.appStore.setToken(res.data);
        this.router.navigate([`/${appRoutes.internal}`]);
      });
  }

  public register() {
    this.httpService
      .post(api.register, this.registerForm.value)
      .subscribe(res => {
        this.appStore.success$ =
          'Success Created Your Account. You may log in now.';
      });
  }
}
