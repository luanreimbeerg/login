import { LayoutModule } from './pages/layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'layout',
    loadChildren: () =>
      import('./pages/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: 'signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
