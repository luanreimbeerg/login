import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RestrictedGuardService } from '../shared/can-activate/restricted-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [RestrictedGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
