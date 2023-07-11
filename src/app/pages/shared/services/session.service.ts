import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private storageService: StorageService) {}

  public hasJwt(): boolean {
    return !!this.storageService.getItem('bearer');
  }

  public hasTokenExpirated(): boolean {
    const expireDate = this.storageService.getItem('token-expires');
    if (expireDate) {
      return moment().isAfter(moment(expireDate));
    } else {
      return true;
    }
  }

  public logoff(): any {
    this.storageService.removeAll();
  }
}
