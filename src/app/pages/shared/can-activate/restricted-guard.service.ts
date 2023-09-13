import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { SessionService } from '../services/session.service';

@Injectable({ providedIn: 'root' })
export class RestrictedGuardService implements CanActivate {
  constructor(private router: Router, private sessionService: SessionService) {}

  canActivate(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot,
    unauthorized?: boolean
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.sessionService.hasJwt()) {
      return this.unauthorized();
    }

    // if (this.sessionService.hasTokenExpirated()) {
    //   return this.unauthorized();
    // }

    return true;
  }

  private unauthorized(): boolean {
    this.sessionService.logoff();
    this.router.navigate(['']);
    return false;
  }
}
