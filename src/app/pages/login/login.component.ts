import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import moment from 'moment';

import { FormErrorMixin } from '../../_shared/mixins/form-error.mixin';
import { MixinHandler } from '../../_shared/mixins/mixin-handler';
import { StorageService } from '../../_shared/services/storage.service';

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

  public hasError!: (
    controlName: string,
    errorName: string,
    form: FormGroup
  ) => false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    MixinHandler.applyMixins(LoginComponent, [FormErrorMixin]);
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public hidePassword(): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ijo0MTAyNDQ0ODAwfQ.nFvIVrG4lw3sNVjYNsl8fwgO60F37Q-X9nRfbyD71NQ';
    this.loading = true;
    if (this.form.get('password')?.value === 'Test@1234') {
      this.storageService.setItem('bearer', mockToken);
      const jwt = this.storageService.getjwt(mockToken);

      this.storageService.setItem(
        'tokenExpires',
        moment(jwt.iat * 1000)
          .format()
          .toLocaleString()
      );

      this.storageService.setItem('name', jwt.name);

      this.router.navigate(['/dashboard']);
      this.loading = false;
    } else {
      this.validPassWord = true;
      this.loading = false;
    }
  }
}
