import { Component, OnInit } from '@angular/core';
import * as EventEmitter from 'events';
import { Student } from 'src/app/interfaces/Student';
import { Course } from 'src/app/interfaces/Course';
import { Teacher } from 'src/app/interfaces/Teacher';
import { StudentService } from 'src/app/service/student.service';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public courses:Course[];
  public students:Student[];
  public course:Course;

  constructor(
    private studentService: StudentService,
    private coursesService: CourseService
  ) { 
    // this.courses = this.coursesService.getCourses();
  
  }

  ngOnInit(): void {
    // this.coursesService.getCourses().subscribe(course =>{
    //   this.courses = course;
    //   console.log(this.courses)
    // })
    this.coursesService.getCoursesID(1).subscribe(course =>{
      this.course = course;
      console.log(this.course)
    })
    //this.students = this.studentService.getStudents();
  }

  addStudent(stuent:Student){
    
  }
  
  addCourse(course:Course){
    console.log(course);
    this.courses.push(course);
    console.log(this.courses)
  }
}
