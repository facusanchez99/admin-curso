import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from 'src/app/interfaces/Course';
import { Teacher } from 'src/app/interfaces/Teacher';
import { CourseService } from 'src/app/service/course.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
  @Input() valueForm: Course;

  @Output() addCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter<Course>();

  public formCourse: FormGroup;
  public error: boolean = false;
  public course: Course[];
  public teachers: Teacher[]
  public load:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
 
    this.teacherService.getTeachers().pipe().subscribe((res=>{
      this.teachers = res
      this.load = true;
    }))
    
   

    this.formCourse = this.formBuilder.group({
      course: [this.valueForm ? this.valueForm.course : null, [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
      teacher: [null, [Validators.required]],
    })


  }

  async getTeachers(){

  }

  submit() {
    if (!this.formCourse.invalid) {
      this.load = false;
      this.courseService.getCourses().subscribe(res => {
        this.course = res;
      })

      if (this.valueForm != null) {

        this.teacherService.getTeacherID(parseInt(this.formCourse.value.teacher)).subscribe(teacher => {
          this.formCourse.controls['teacher'].setValue(teacher);
          let courseEdit: Course = {
            id: this.valueForm.id,
            course: this.formCourse.get('course').value,
            teachers: [{
              id: teacher.id,
              name: teacher.name,
              surname: teacher.surname,
              email: teacher.email,
              photo: teacher.photo,
            }],
            students: this.valueForm.students
          }
          this.editCourse.next(courseEdit);
        });


      } else {
        let courseNew: Course;


        this.teacherService.getTeacherID(parseInt(this.formCourse.value.teacher)).subscribe(teacher => {
          this.formCourse.controls['teacher'].setValue(teacher);
          courseNew = {
            course: this.formCourse.get('course').value,
            teachers: [{
              id: teacher.id,
              name: teacher.name,
              surname: teacher.surname,
              email: teacher.email,
              photo: teacher.photo,
            }],
            students: []
          }

        })
        this.addCourse.next(courseNew);
      }
      this.load = true;
    } else {

    }
  }

  getErrorMessage(value:any) {
    if(value?.errors?.['minlength']){
      return 'The minimum character is 2';
    }
    if(value?.errors?.['maxlength']){
      return  'The maximum number of characters has been exceeded';
    }

    return value.hasError('required') ? 'You must enter a value' : '';
  }

}
