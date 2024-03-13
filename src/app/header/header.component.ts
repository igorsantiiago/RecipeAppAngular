import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  userIsAuthenticated = false;
  private userSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.userIsAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  onLogout() {
    this.authService.logout();
  }


}