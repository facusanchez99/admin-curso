import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Course } from '../interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {



  //para tabla courses
  // public courses: Course

  // private courses: Observable<Course[]> = new Observable((obser) => {
  //   try {
  //     let course: Course[] = [
  //       this.course1, this.course2
  //     ]

  //     obser.next(course);

  //     throw ({ message: 'Bad response' })
  //   } catch (e) {
  //     console.log(obser.error(e.message));
  //   }
  //   obser.complete();
  // })
  private coursesMock: Course[] = [];

  constructor() {
    // let course1 = ;
    // let course2 = new Course(2, "Programacion 2", null, null);

    this.coursesMock.push({
      id: 1, course: "Programacion",
      teachers: [
        { id: 2, name: "Jose", surname: "Sanchez", email: "jose@gmail.com", photo: null }],
      students: [
        { id: 2, name: "Alumno 2", surname: "Alumno 2", email: "email", photo: "foto", courses: [{ id: 1, course: "Programacion" }] }
      ]
    });

    this.coursesMock.push({ id: 2, course: "Web" });
    this.coursesMock.push({ id: 3, course: "Programacion 2" });
    //this.coursesMock.push((2, "Programacion 2", null, null);
    // this.coursesMock.push({i})
  }


  getCourses(): Observable<Course[]> {
    // return this.observable.get();
    return of(this.coursesMock);

  }

  getCoursesID(id: number): Observable<Course> {
    // return this.courses.subscribe({
    //   next(id){console.log(nex);},
    //   complete(){console.log('a')}
    // });
    return of(this.coursesMock.find(e => e.id === id));
  }

  postCourse(): Observable<Course> {
    //retornar el valor agregado
    return null;
  }

  updateCourse(): Observable<Course> {
    //retornar el valor update
    return null;
  }

  deleteCourse(course:Course): Observable<Course[]> {
    const index = this.coursesMock.indexOf(course);
    this.coursesMock.splice(index,1);
    return of(this.coursesMock);
  }



}
