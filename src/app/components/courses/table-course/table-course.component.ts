import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from 'src/app/interfaces/Course';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';

import { map, Observable } from 'rxjs';
import { ModalCourseComponent } from './modal-course/modal-course.component';
import { CourseService } from 'src/app/service/course.service';
import { AuthUserService } from 'src/app/service/authuser.service';


@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit {



  @Output() addCourse = new EventEmitter<Course>();

  public course: Course[] = []
  public courseSelect: Course;

  public load:boolean = false;

  constructor(

    public auth:AuthUserService,
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private coursesService: CourseService
  ) {}

  ngOnInit(): void {

    this.getCourses();
  }

  getCourses(){
    this.coursesService.getCourses().subscribe(course => {
      this.course = course;
      this.load = true;
    })
  }

  addNewCourse(course: Course): void {
    this.coursesService.postCourse(course).subscribe(data => {
      this.course.push(data);
    })
  }

  editCourse(course: Course) {
    this.coursesService.updateCourse(course).subscribe(data => {
      const index = this.course.findIndex(e => e.id == data.id);
      this.course.splice(index, 1, data)
    })
    this.courseSelect = null;
  }

  deleteCourse(id: number): void {
    this.coursesService.deleteCourse(id).subscribe(data => {
      this.course = this.course.filter(e => e.id !== id)
    });
  }

  selectEditCourse(course: Course): void {
    this.courseSelect = null;
    this.courseSelect = course;
  }

  exitEdit() {
    this.courseSelect = null;
  }
  submitModalTable(course: Course): void {
    this.dialog.open(ModalCourseComponent, {
      data: {
        id: course.id,
        course: course.course,
        teachers: course.teachers,
        students: course.students
      }
    })
  }

  getErrorMessage(control: any) {
    if (control.errors.required) {
      return "Campo requerido"
    }
    return "Campo invalido";
  }

}
