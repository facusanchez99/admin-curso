import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor() { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('role')){
      return true;
    }
    return false;
  }

  hasRole(role):boolean{
    // const role = sessionStorage.getItem('role');
  
    if(sessionStorage.getItem('role') && sessionStorage.getItem('role').includes(role)){
      return true;
    }
    
    return false;
  }
}
