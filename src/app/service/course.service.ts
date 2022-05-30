import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Course } from '../interfaces/Course';
import { Student } from '../interfaces/Student';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  private coursesMock: Course[] = [];

  constructor() {

    this.coursesMock.push({
      id: 1, course: "Programacion",
      teachers: [
        { id: 2, name: "Jose", surname: "Sanchez", email: "jose@gmail.com", photo: null }],
      students: [
        { id: 2, name: "Alumno 1", surname: "Alumno 1", email: "email", photo: "foto", courses: [{ id: 1, course: "Programacion", teachers: [], students: [] }] },
        { id: 2, name: "Alumno 2", surname: "Alumno 2", email: "email", photo: "foto", courses: [{ id: 1, course: "Programacion", teachers: [], students: [] }] }
      ]
    });

    this.coursesMock.push({ id: 2, course: "Web", teachers: [], students: [] });
    this.coursesMock.push({ id: 3, course: "Programacion 2", teachers: [], students: [] });

  }


  getCourses(): Observable<Course[]> {

    return of(this.coursesMock);
  }

  getCoursesID(id: number): Observable<Course> {

    return of(this.coursesMock.find(e => e.id === id));
  }

  postCourse(course:Course): Observable<Course[]> {
    this.coursesMock.push(course);
    //esto deberia devolver un status de http con el curso creado.
    return of(this.coursesMock);
  }

  updateCourse(course:Course):Observable<Course[]>{
    const index = this.coursesMock.findIndex(e=>e.id==course.id);
    this.coursesMock.splice(index,1,course);
    return of(this.coursesMock);
  }

  updateCourseStudent(student: Student): Observable<Course[]> {
    // console.log(course[0]);
    let result = this.coursesMock.find(e => e.id === student.courses[0].id)
    result.students.push(student)

    return of(this.coursesMock);
  }

  deleteCourse(course: Course): void {
    const index = this.coursesMock.indexOf(course);
    this.coursesMock.splice(index, 1);
    console.log(this.coursesMock)
    //return of(this.coursesMock);
  }

  deleteStudentCourse(student:Student):void{
    this.coursesMock.findIndex(e=>{
      const index = e.students.indexOf(student)
      e.students.splice(index,1);
    })
    console.log(this.coursesMock);
  }



}
