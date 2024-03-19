import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss'],
})
export class CustomSnackbarComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: { message: string; type: 'info' | 'error' | 'success' },
    private _snackbarRef: MatSnackBarRef<CustomSnackbarComponent>
  ) {}

  ngOnInit(): void {}

  public closeSnackbar(): void {
    this._snackbarRef.dismiss();
  }
}
