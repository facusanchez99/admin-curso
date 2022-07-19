import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/interfaces/Student';
import { Course } from 'src/app/interfaces/Course';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';

import { FormBuilder } from '@angular/forms';

import { ModalCourseComponent } from '../table-course/modal-course/modal-course.component';
import { ModalStudentComponent } from '../../student/table-students/modal-student/modal-student.component';
import { StudentService } from 'src/app/service/student.service';
import { CourseService } from 'src/app/service/course.service';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/service/authuser.service';

@Component({
  selector: 'app-tabla-course-id',
  templateUrl: './tabla-course-id.component.html',
  styleUrls: ['./tabla-course-id.component.css']
})

export class TablaCourseIDComponent implements OnInit {

  @Input() titulo: string;

  @Output() addCourse = new EventEmitter<Course>();
  @Output() addStudent = new EventEmitter<Student>();
  
  public detalle: Course;
  public student:Student[];
  public courses:Course[] = [];
  public course:Course;
  public load:boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private studentService:StudentService,
    private coursesService:CourseService,
    private route:ActivatedRoute,
    public auth:AuthUserService
  ) {

  }


  ngOnInit(): void {
    let id :number = 0;
    this.route.params.subscribe(params=>{
      id = parseInt(params['id']);
      this.coursesService.getCoursesID(id).subscribe(course =>{
        this.course = course;
        this.student = this.course.students 
        this.courses.push(this.course)
      })
      this.load = true;
    })


  }
  
  ngOnDestroy() {

  }

  async addNewStudent(student:Student){
    
    const studentPost = await this.studentService.postStudents(student)
    this.student.push(studentPost);
    this.coursesService.updateCourseStudent(studentPost,student.courses.pop()).subscribe(data=>{
        this.course = data;
        this.student = data.students
    });
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

  deleteCourseStudent(course:Course,student:Student){
    this.coursesService.deleteStudentCourse(student,course).subscribe(data=>{
      this.course.students.filter(e=>e.id != student.id);
    });
    this.studentService.deleteStudentCourse(student,course).subscribe();
  }

  getErrorMessage(control: any) {
    if (control.errors.required) {
      return "Campo requerido"
    }
    return "Campo invalido";
  }


}
