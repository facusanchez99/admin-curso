import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/interfaces/Student';
import { Course } from 'src/app/interfaces/Course';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ModalCourseComponent } from '../../courses/table-course/modal-course/modal-course.component';

import { StudentService } from 'src/app/service/student.service';
import { CourseService } from 'src/app/service/course.service';
import { ModalStudentComponent } from './modal-student/modal-student.component';


@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {

  // public detalle: Course;
  public student: Student[];
  public courses: Course[];
  public studentSelect: Student = null;
  public role: boolean = false;



  constructor(
    // private fb: FormBuilder,
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private studentService: StudentService,
    private coursesService: CourseService
  ) { }



  ngOnInit(): void {
    // obtener alumnos globales //no se usa xasas

    if (sessionStorage.getItem('role')) {
      this.role = sessionStorage.getItem('role') === 'admin' ? true : false;
    }
    this.coursesService.getCourses().subscribe(course => {
      this.courses = course;
    })

    this.studentService.getStudents().subscribe(student => {
      this.student = student;
    })


    //obtener alumnos de un curso
    // this.studentService.getStudentsCourseID(1).subscribe(student=>{
    //   this.student = student;
    // })
  }

  addNewStudent(student: Student) {
    console.log(student);
    this.studentService.postStudents(student);
    this.coursesService.updateCourseStudent(student);

  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudents(student);
    this.coursesService.deleteStudentCourse(student);
  }

  selectEditStudent(student: Student) {
    this.studentSelect = student;
  }

  editStudent(student: Student) {
    this.studentService.updateStudents(student);
    //actualizar tambien en el array de cursos students
    this.studentSelect = null;
  }

  exitEdit() {
    this.studentSelect = null;
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

  submitModalStudent(student: Student) {
    //const result = this.student.find(c => c.id === id);

    this.dialog.open(ModalStudentComponent, {

      data: {
        id: student.id,
        name: student.name,
        surname: student.surname,
        email: student.email,
        photo: student.photo,
        courses: student.courses
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
