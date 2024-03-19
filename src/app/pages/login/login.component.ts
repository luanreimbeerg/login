import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import moment from 'moment';
import { Subscription, finalize } from 'rxjs';

import { FormErrorMixin } from '../../_shared/mixins/form-error.mixin';
import { MixinHandler } from '../../_shared/mixins/mixin-handler';
import { StorageService } from '../../_shared/services/storage.service';
import { AuthService } from '../../_shared/services/auth.service';
import { responseAuthModel } from '../../_shared/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public validPassWord: boolean = false;
  public hide: boolean = false;
  public loading: boolean = false;

  private subscription = new Subscription();

  public hasError!: (
    controlName: string,
    errorName: string,
    form: FormGroup
  ) => false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    MixinHandler.applyMixins(LoginComponent, [FormErrorMixin]);
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public hidePassword(): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    this.loading = true;

    this.subscription.add(
      this.authService
        .login(this.form.getRawValue())
        .pipe(finalize(() => (this.loading = false)))
        .subscribe({
          next: (next) => this.loginSuccess(next),
          error: (err) => this.loginError(err),
        })
    );
  }

  loginSuccess(resp: responseAuthModel): void {
    this.storageService.setItem('accessToken', resp.access_token);
    const jwt = this.storageService.getjwt(resp.access_token);

    this.storageService.setItem(
      'tokenExpires',
      moment(jwt.exp * 1000)
        .format()
        .toLocaleString()
    );

    this.storageService.setItem('name', jwt.username);

    this.router.navigate(['/dashboard']);
  }
  loginError(err: HttpErrorResponse): void {
    this.validPassWord = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
