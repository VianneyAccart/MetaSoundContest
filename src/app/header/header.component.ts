import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openedMobileMenu: boolean;
  imageSource: string;
  // Change navbar style according to url
  url = '';

  constructor(private router: Router) {
    this.openedMobileMenu = false;
    this.imageSource = '/assets/image/logo-meta-sound-contest.jpg';
    this.url = this.router.url;
  }

  // Open and close mobile menu
  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu;
  }
  ngOnInit(): void {
  }

}
