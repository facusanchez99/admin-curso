import { Component, OnInit,Inject } from '@angular/core';
import { Course } from 'src/app/interfaces/Course';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Teacher } from 'src/app/interfaces/Teacher';
import { Student } from 'src/app/interfaces/Student';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.css']
})
export class ModalStudentComponent implements OnInit {

  public student:Student;


  constructor(
    public dialogRef: MatDialogRef<ModalStudentComponent>, @Inject(MAT_DIALOG_DATA) public data: Student,
    private studentService:StudentService,
    private coursesService:CourseService
  ) {
    this.student = data;
  }

  ngOnInit(): void {

  }

  onNoClick(){
    this.dialogRef.close();
  }

  edit(student:Student){
  }

  deleteCourseStudent(course:Course,student:Student){

  }
}
