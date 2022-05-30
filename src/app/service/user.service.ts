import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Course } from '../interfaces/Course';
import { Student } from '../interfaces/Student';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userMock: User[] = [];

  constructor() {
    this.userMock.push({ id: 1, email: "admin@gmail.com", password: "123"});
    this.userMock.push({ id: 2, email: "user@gmail.com", password:"123"});

  }


  getUser(): Observable<User[]> {

    return of(this.userMock);

  }

  getCoursesID(id: number): Observable<User> {

    return of(this.userMock.find(e => e.id === id));
  }




}
