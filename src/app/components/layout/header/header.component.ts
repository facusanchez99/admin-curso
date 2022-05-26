import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public viewMenu:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  openMenu(){
    this.viewMenu = this.viewMenu ? false : true;
  }

}
