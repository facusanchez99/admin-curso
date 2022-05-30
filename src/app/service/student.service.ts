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
    this.studentsMock.push({ id: 1, name: "Alumno 1", surname: "Alumno 1", email: "email", photo: "foto", courses: [{ id: 1, course: "Programacion", teachers: [], students: [] }] })
    this.studentsMock.push({ id: 2, name: "Alumno 2", surname: "Alumno 2", email: "email", photo: "foto", courses: [{ id: 1, course: "Programacion", teachers: [], students: [] }] })
  }

  getStudents(): Observable<Student[]> {
    return of(this.studentsMock);
  }

  getStudentsID(id: number): Student {
    return null;
  }

  postStudents(student: Student): Observable<Student[]> {
    this.studentsMock.push(student);
    return of(this.studentsMock);
  }

  updateStudents(student: Student): Observable<Student[]> {
    const index = this.studentsMock.findIndex(e => e.id === student.id);
    this.studentsMock.splice(index,1,student);
    return of(this.studentsMock);
  }

  deleteStudents(student:Student): void {
    const index = this.studentsMock.indexOf(student);
    this.studentsMock.splice(index,1);
  }

}
