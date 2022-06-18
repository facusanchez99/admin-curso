import { Component, OnInit,Inject } from '@angular/core';
import { Course } from 'src/app/interfaces/Course';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Teacher } from 'src/app/interfaces/Teacher';
import { Student } from 'src/app/interfaces/Student';
import { StudentService } from 'src/app/service/student.service';
import { CourseService } from 'src/app/service/course.service';
import { AuthUserService } from 'src/app/service/authuser.service';

@Component({
  selector: 'app-modal-course',
  templateUrl: './modal-course.component.html',
  styleUrls: ['./modal-course.component.css']
})
export class ModalCourseComponent implements OnInit {

  public course:Course;
  public teacher:Teacher[];

  constructor(
    public dialogRef: MatDialogRef<ModalCourseComponent>, @Inject(MAT_DIALOG_DATA) public data: Course,
    private studentService:StudentService,
    private coursesService:CourseService,
    public auth:AuthUserService
  ) {
    this.course = data;
  }

  ngOnInit(): void {
    console.log(this.course)
    if(this.course?.teachers?.length>0){
      this.teacher = this.course.teachers;
    }
  }

  onNoClick(){
    this.dialogRef.close();
  }

  edit(teacher:Teacher){
    console.log(teacher);
    //this.course.teachers.pop(t => t.id === teacher.id);
  }

  // deleteTeacher(teacher:Teacher){
  //   const index = this.course.teachers.indexOf(teacher)
  //   this.course.teachers.splice(index,1);
  // }


  deleteCourseStudent(course:Course,student:Student){
    console.log(course)
    console.log(student);
    this.coursesService.deleteStudentCourse(student,course);
    this.studentService.deleteStudentCourse(student,course);
  }

}
