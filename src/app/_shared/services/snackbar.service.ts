import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  public openSnackbar(data: {
    message: string;
    type: 'info' | 'error' | 'success';
  }): void {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      data: data,
      panelClass: 'custom-snackbar-panel',
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}
