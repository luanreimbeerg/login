import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSnackbarComponent } from './custom-snackbar.component';

@NgModule({
  declarations: [CustomSnackbarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [CustomSnackbarComponent],
})
export class CustomSnackbarModule {}
