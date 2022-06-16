import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Course } from '../interfaces/Course';
import { Student } from '../interfaces/Student';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private url = "https://62aa24153b3143855442d06e.mockapi.io/student";

  private configurationOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) {

  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url,this.configurationOptions);
  }

  getStudentsID(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}/${id}`,this.configurationOptions);
  }

  async postStudents(student: Student): Promise<Student> {
    return await this.http.post<Student>(this.url,student,this.configurationOptions).toPromise();
  }

  updateStudents(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.url}/${student.id}`,student,this.configurationOptions);
  }

  deleteStudents(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.url}/${id}`,this.configurationOptions);
  }


  deleteStudentCourse(student: Student, course: Course): Observable<Student> {
    const index = student.courses.findIndex(c =>c.id === course.id);
    if(index >=0){
      student.courses.splice(index,1);
    }
   
    return this.http.put<Student>(`${this.url}/${student.id}`,student,this.configurationOptions);
  }

}
