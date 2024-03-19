import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StorageService } from '../services/storage.service';

@Injectable({ providedIn: 'root' })
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers;

    headers = req.headers.set(
      'Authorization',
      `Bearer ${this.storageService.getItem('accessToken')}`
    );

    return next.handle(req.clone({ headers }));
  }
}
