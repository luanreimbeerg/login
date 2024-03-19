import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { userResponseModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlUser = environment.endpointUser;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Array<userResponseModel>> {
    return this.http
      .get<Array<userResponseModel>>(`${this.urlUser}`)
      .pipe(map((response) => response));
  }
}
