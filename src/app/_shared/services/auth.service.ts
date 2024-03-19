import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { requestAuthModel, responseAuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlAuth = environment.endpointAuth;

  constructor(private http: HttpClient) {}

  public login(requestBody: requestAuthModel): Observable<responseAuthModel> {
    return this.http
      .post<responseAuthModel>(`${this.urlAuth}/login`, requestBody)
      .pipe(map((response) => new responseAuthModel(response)));
  }
}
