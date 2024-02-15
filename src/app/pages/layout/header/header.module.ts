import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
