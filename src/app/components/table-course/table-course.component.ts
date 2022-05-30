import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/interfaces/Student';
import { Course } from 'src/app/interfaces/Course';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ModalCourseComponent } from './modal-course/modal-course.component';
import { CourseService } from 'src/app/service/course.service';
// import { ModalCourseComponent } from './modal-course/modal-course.component';
// import { ModalStudentComponent } from './modal-student/modal-student.component';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit {



  @Output() addCourse = new EventEmitter<Course>();

  public course: Course[] = []
  public courseSelect: Course;
  public p:String = "Hola a"

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private coursesService: CourseService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;


  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(course => {
      this.course = course;
    })
  }

  addNewCourse(course: Course): void {
    console.log(course)
    this.coursesService.postCourse(course);
    // let course2 = new Course(2, "Programacion 3", [],  [] );
    // this.addCourse.emit(course2);
  }
  
  editCourse(course: Course) {
    console.log(course)
    this.coursesService.updateCourse(course);
    this.courseSelect = null;
  }

  selectEditCourse(course: Course): void {
    this.courseSelect = null;
    this.courseSelect = course;
  }

  exitEdit() {
    this.courseSelect = null;
  }

  delteCourse(course: Course): void {
    this.coursesService.deleteCourse(course);
  }

  submitModalTable(course: Course): void {
    // const result = this.course.find(c => c.id === id);
    this.dialog.open(ModalCourseComponent, {
      data: {
        id: course.id,
        course: course.course,
        teachers: course.teachers,
        students: course.students
      }
    })
  }

  submitModalStudent(id: number): void {
    // const result = this.student.find(c => c.id === id);
    // this.dialog.open(ModalStudentComponent, {
    //   data: {
    //     id: result.id,
    //     name: result.name,
    //     surname: result.surname,
    //     email: result.email,
    //     photo: result.photo,
    //     courses: result.courses
    //   }
    // })
    // id:number,
    // name:string,
    // surname:string,
    // email:string,
    // photo:string,
    // courses:Curso[]
  }

  getErrorMessage(control: any) {
    if (control.errors.required) {
      return "Campo requerido"
    }
    return "Campo invalido";
  }

}
