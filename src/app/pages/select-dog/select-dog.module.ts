import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDogRoutingModule } from './select-dog-routing.module';
import { SelectDogComponent } from './select-dog.component';


@NgModule({
  declarations: [
    SelectDogComponent
  ],
  imports: [
    CommonModule,
    SelectDogRoutingModule
  ]
})
export class SelectDogModule { }
