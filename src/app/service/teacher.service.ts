import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from '../interfaces/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  public profesor = { id: 1, name: "Facundo", surname: "Sanchez", email: "facu@gmail.com", photo: null };
  public profesor1 = { id: 2, name: "Jose", surname: "Sanchez", email: "jose@gmail.com", photo: null };
  private teachersMock: Teacher[] = [];
  constructor() {
    this.teachersMock.push({ id: 1, name: "Facundo", surname: "Sanchez", email: "facu@gmail.com", photo: null });
    this.teachersMock.push({ id: 2, name: "Jose", surname: "Sanchez", email: "jose@gmail.com", photo: null });
  }

  getTeachers(): Observable<Teacher[]> {
    return of(this.teachersMock);
  }

  getTeacherID(id: number): Observable<Teacher> {
    return of(this.teachersMock.find(e=>e.id===id));
  }

  getTeacherCourseID(id: number): Teacher {
    return null;
  }

  postTeacher(): Teacher {
    //retornar el valor agregado
    return null;
  }

  updateTeacher(): Teacher {
    //retornar el valor update
    return null;
  }

  deleteTeacher(): void {
    //retornar status http
  }
}
