import { Injectable } from '@angular/core';
import { delay, from, map, Observable, of, tap } from 'rxjs';
import { Course } from '../interfaces/Course';
import { Student } from '../interfaces/Student';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public course: Observable<Array<Course>>

  private url = "https://62aa24153b3143855442d06e.mockapi.io/courses";
  private configurationOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) {

  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url, this.configurationOptions);
  }

  getCoursesID(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`, this.configurationOptions);
  }

  async getCoursesFormID(id: number): Promise<Course> {
    return await this.http.get<Course>(`${this.url}/${id}`, this.configurationOptions).toPromise()
  }

  postCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.url, course, this.configurationOptions);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.url}/${course.id}`, course, this.configurationOptions);
  }

  updateCourseStudent(student: Student,course:Course): Observable<Course> {
    course.students.push(student)
    return this.http.put<Course>(`${this.url}/${course.id}`,course,this.configurationOptions);

  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${this.url}/${id}`, this.configurationOptions);

  }

  deleteStudentCourse(student: Student,course:Course): Observable<Course> {
    const index = course.students.findIndex(s=>s.id == student.id);
    if(index >= 0){
      course.students.splice(index,1);
    }
 
    return this.http.put<Course>(`${this.url}/${course.id}`,course,this.configurationOptions);
    // console.log(this.coursesMock);
  }



}
