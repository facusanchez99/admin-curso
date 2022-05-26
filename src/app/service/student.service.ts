import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../interfaces/Course';
import { Student } from '../interfaces/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public studentsMock: Student[] = [];

  constructor() {
    this.studentsMock.push({ id: 1, name: "Alumno 1", surname: "Alumno 1", email: "email", photo: "foto",courses:[{id:1,course:"Programacion"}]})
    this.studentsMock.push({ id: 2, name: "Alumno 2", surname: "Alumno 2", email: "email", photo: "foto",courses:[{id:1,course:"Programacion"}]})
  }

  getStudents():Observable<Student[]>{
    return of(this.studentsMock);
  }

  getStudentsID(id:number):Student{
    return null;
  }

  postStudents():Student{
    //retornar el valor agregado
    return null;
  }

  updateStudents():Student{
    //retornar el valor update
    return null;
  }

  deleteStudents():void{
    //retornar status http
  }

}
