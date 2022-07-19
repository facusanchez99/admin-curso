import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/User';
import { loadFeatureLoginsLogout } from 'src/app/Store/Features/Login/feature-login.actions';
import { selectUser } from 'src/app/Store/Features/Login/feature-login.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public viewMenu: boolean = false;
  //esto deberia tener verificacion con token +db
  public userActive:User = null;
  constructor(
    private router: Router,
    private store: Store,
    ) { }


  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('session') || 'false');
    this.store.select(selectUser).subscribe((data) => {
      if (data) {
        const {username,role,id} = data
        this.userActive = {username,role,id,password:null};
      } else {
        this.userActive = user.user;
      }
    
    });

  }

  openMenu() {
    this.viewMenu = this.viewMenu ? false : true;
  }

  logout() {
    sessionStorage.clear();
    this.userActive = null;
    this.store.dispatch(loadFeatureLoginsLogout());
    this.router.navigate(['/login'])
  }

}
