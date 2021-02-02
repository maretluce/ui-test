import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../../scss/app.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  public statusMenu: boolean;  

  constructor() {
    this.statusMenu = false;
  }

  ngOnInit(): void { }

  ngDoCheck(){ }

  /*burger*/  
  menuMobile() {
    this.statusMenu = !this.statusMenu;
  }
}