import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormErrorMixin } from '../shared/mixins/form-error.mixin';
import { MixinHandler } from '../shared/mixins/mixin-handler';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

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

  onSubmit(): void {
    this.storageService.setItem('bearer', 'Bearer 12');
    this.router.navigate(['/home']);
  }
}
