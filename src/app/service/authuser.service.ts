import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor() { }

  isAuthenticated():boolean{
    const user = JSON.parse(sessionStorage.getItem('session') || 'false');
    if(user){
      return true;
    }
    return false;
  }

  hasRole(role:string):boolean{
    const {user} = JSON.parse(sessionStorage.getItem('session') || 'false');

    if(user && user.role === role){
      return true;
    }
  
    return false;
  }
}
