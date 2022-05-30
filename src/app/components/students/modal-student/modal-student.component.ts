import { Component, OnInit,Inject } from '@angular/core';
import { Course } from 'src/app/interfaces/Course';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Teacher } from 'src/app/interfaces/Teacher';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.css']
})
export class ModalStudentComponent implements OnInit {

  public student:Student;


  constructor(
    public dialogRef: MatDialogRef<ModalStudentComponent>, @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.student = data;
  }

  ngOnInit(): void {

  }

  onNoClick(){
    this.dialogRef.close();
  }

  edit(student:Student){
    console.log(student);
    //this.course.teachers.pop(t => t.id === teacher.id);
  }

  // deleteStudent(student:Student){
  //   // const index = this.student.courses.indexOf(courses)
  //   // this.student.courses.splice(index,1);
  // }
  
  // deleteCourses(courses:Course){
  //   const index = this.student.courses.indexOf(courses)
  //   this.student.courses.splice(index,1);
  // }

  deleteCourseStudent(course:Course,student:Student){
    console.log(course)
    console.log(student);
  }
}
