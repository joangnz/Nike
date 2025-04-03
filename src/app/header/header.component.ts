import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SITE_URL } from '../app.constants';

import { AuthService } from '../services/auth.service';

import { JordanSvgComponent } from '../jordan-svg/jordan-svg.component';
import { ConverseSvgComponent } from '../converse-svg/converse-svg.component';
import { NikeSvgComponent } from '../nike-svg/nike-svg.component';

@Component({
  selector: 'app-header',
  imports: [
    JordanSvgComponent,
    ConverseSvgComponent,
    NikeSvgComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  SITE_URL = SITE_URL;
  title = 'routing.';
  loggedIn = false;
  isAdmin = false;

  constructor(private authService: AuthService) {
    this.authService.userRole$.subscribe((role) => {
      this.loggedIn = !!role;
      console.log("loggedIn:", this.loggedIn);
      this.isAdmin = role === 'admin';
    });
  }

  logout(): void {
    this.authService.logout();
    alert("Logging out.");
  }
}
