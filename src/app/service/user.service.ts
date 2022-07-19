import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '../shared/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public course: Observable<Array<User>>
  private session:any;
  private url = "https://62aa24153b3143855442d06e.mockapi.io/user";
  private configurationOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) {}


  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`,this.configurationOptions);
  }
  sessionActive(active:boolean,user:User){
    this.session = {
      active,
      user,
    };
    sessionStorage.setItem('session', JSON.stringify(this.session));
  }



}
