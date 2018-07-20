import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {

  menuClicked : boolean;

  constructor() { }

  ngOnInit() {
  }

  onMenuClick(this) {
      this.menuClicked = !this.menuClicked;
  }
}
