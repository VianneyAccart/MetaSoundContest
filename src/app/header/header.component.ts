import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  openedMobileMenu: boolean;
  imageSource: string;

  constructor(private router: Router) {
    this.openedMobileMenu = false;
    this.imageSource = '/assets/image/logo-meta-sound-contest.jpg';
  }

  // Open and close mobile menu
  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu;
  }
}
