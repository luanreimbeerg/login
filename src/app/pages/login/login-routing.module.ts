import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginGuardService } from '../shared/can-activate/login-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuardService],
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
