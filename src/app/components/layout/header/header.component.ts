import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public viewMenu: boolean = false;
  //esto deberia tener verificacion con token +db
  public username = sessionStorage.getItem('username');
  constructor(private router: Router) { }


  ngOnInit(): void {

  }

  openMenu() {
    this.viewMenu = this.viewMenu ? false : true;
  }

  logout() {
    sessionStorage.clear();
    this.username = null;
    this.router.navigate(['/login'])
  }

}
