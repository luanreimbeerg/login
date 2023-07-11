import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable()
export class StorageService {
  private storageSub = new Subject<string>();
  private isProduction = environment.production;

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any): any {
    this.isProduction
      ? sessionStorage.setItem(key, data)
      : localStorage.setItem(key, data);
    this.storageSub.next('changed');
  }

  getItem(key: string): any {
    return this.isProduction
      ? sessionStorage.getItem(key)
      : localStorage.getItem(key);
  }

  removeItem(key: string): any {
    this.isProduction
      ? sessionStorage.removeItem(key)
      : localStorage.removeItem(key);
    this.storageSub.next('changed');
  }

  removeAll(): any {
    this.isProduction ? sessionStorage.clear() : localStorage.clear();
    this.storageSub.next('changed');
  }
}
