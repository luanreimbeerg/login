import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDogComponent } from './select-dog.component';

const routes: Routes = [{ path: '', component: SelectDogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectDogRoutingModule { }
