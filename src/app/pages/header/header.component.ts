import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) {}

  ngOnInit(): void {}

  public redirectSelectDog(): void {
    this.router.navigate(['/select-dog']);
  }

  public navegateHome(): void {
    this.router.navigate(['/dashboard']);
  }

  public logout(): void {
    this.sessionService.logoff();
    this.router.navigate(['/login']);
  }
}
