import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/interfaces/Student';
import { Course } from 'src/app/interfaces/Course';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ModalCourseComponent } from '../table-course/modal-course/modal-course.component';
import { ModalStudentComponent } from './modal-student/modal-student.component';
import { StudentService } from 'src/app/service/student.service';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-tabla-home',
  templateUrl: './tabla-home.component.html',
  styleUrls: ['./tabla-home.component.css']
})

export class TablaHomeComponent implements OnInit {
  // @Input() student: Student[];
  // @Input() course: Course[];
  @Input() titulo: string;

  @Output() addCourse = new EventEmitter<Course>();
  @Output() addStudent = new EventEmitter<Student>();
  
  public detalle: Course;
  public student:Student[];
  public course:Course;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private studentService:StudentService,
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
    //obtener alumnos globales //no se usa xasas
    // this.studentService.getStudents().subscribe(student=>{
    //   this.student = student;
    // })
    this.coursesService.getCoursesID(1).subscribe(course =>{
      this.course = course;
      this.student = this.course.students 
      console.log(this.course)
    })
    //obtener alumnos de un curso
    // this.studentService.getStudentsCourseID(1).subscribe(student=>{
    //   this.student = student;
    // })
  }

  addNewCourse(){
    // let course2 = new Course(2, "Programacion 3", [],  [] );
    // this.addCourse.emit(course2);
  }

  submitModalTable(course: Course) {
    this.dialog.open(ModalCourseComponent, {
      data: {
        id: course.id,
        course: course.course,
        teachers: course.teachers,
        students: course.students
      }
    })
  }
  
  submitModalStudent(id: number) {
    const result = this.student.find(c => c.id === id);
    this.dialog.open(ModalStudentComponent, {
      data: {
        id: result.id,
        name: result.name,
        surname: result.surname,
        email: result.email,
        photo: result.photo,
        courses: result.courses
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
