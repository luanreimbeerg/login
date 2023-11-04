import { SessionService } from './../../shared/services/session.service';
import { StorageService } from './../../shared/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) {}

  ngOnInit(): void {}

  public navegateHome(): void {
    this.router.navigate(['/home']);
  }

  public logout(): void {
    this.sessionService.logoff();
    this.router.navigate(['/login']);
  }
}
