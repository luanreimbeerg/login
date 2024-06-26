import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../_shared/services/session.service';
import { StorageService } from '../../../_shared/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public name: string = this.storageService.getItem('name');

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  public redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  public logout(): void {
    this.sessionService.logoff();
    this.redirectTo('/login');
  }
}
