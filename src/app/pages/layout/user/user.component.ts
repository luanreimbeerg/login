import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription, finalize } from 'rxjs';

import { LoadingComponent } from '../../../_shared/components/loading/loading.component';
import { userResponseModel } from '../../../_shared/models/user.model';
import { SnackbarService } from '../../../_shared/services/snackbar.service';
import { UserService } from '../../../_shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  private loadingDialog!: MatDialogRef<LoadingComponent>;

  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource: any = new MatTableDataSource<Array<userResponseModel>>();

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    public snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.openDialogLoading();
    this.getUsers();
  }

  private getUsers(): void {
    this.subscription.add(
      this.userService
        .getUsers()
        .pipe(finalize(() => this.loadingDialog.close()))
        .subscribe({
          next: (next) => (this.dataSource = next),
          error: () =>
            this.snackbarService.openSnackbar({
              message: 'Erro ao carregar usuários!',
              type: 'error',
            }),
        })
    );
  }

  private openDialogLoading(): void {
    this.loadingDialog = this.dialog.open(LoadingComponent, {
      disableClose: true,
      data: true,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
