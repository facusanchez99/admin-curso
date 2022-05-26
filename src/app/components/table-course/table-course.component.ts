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

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private coursesService:CourseService
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
    this.coursesService.getCourses().subscribe(course =>{
      this.course = course;
      console.log(this.course)
    })
  }

  addNewCourse(id: number):void{
    // let course2 = new Course(2, "Programacion 3", [],  [] );
    // this.addCourse.emit(course2);
  }

  editCourse(id: number):void{

  }
  
  delteCourse(course:Course):void{
    this.coursesService.deleteCourse(course).subscribe();
  }

  submitModalTable(id: number):void {
    const result = this.course.find(c => c.id === id);
    this.dialog.open(ModalCourseComponent, {
      data: {
        id: result.id,
        course: result.course,
        teachers: result.teachers,
        students: result.students
      }
    })
  }
  
  submitModalStudent(id: number):void {
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
