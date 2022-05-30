import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/interfaces/Course';
import { Student } from 'src/app/interfaces/Student';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  @Input() courses: Course | Course[]
  @Input() valueForm: Student;
  @Input() readOnly: boolean = false;

  @Output() addStudent = new EventEmitter<Student>();
  @Output() editStudent = new EventEmitter<Student>();

  formAlumno: FormGroup;
  error: boolean = false;

  public isArray = false;

  public student: Student[];

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    // this.courseService.getCourses().subscribe(res => {
    //   this.courses = res;
    // })
    // console.log(this.courses)


    Array.isArray(this.courses) ? this.isArray = true : this.isArray = false;

    this.formAlumno = this.formBuilder.group({
      name: [this.valueForm ? this.valueForm.name : null, [Validators.required,Validators.maxLength(60),Validators.minLength(2)]],
      surname: [this.valueForm ? this.valueForm.surname : null, [Validators.required,Validators.maxLength(60),Validators.minLength(2)]],
      email: [this.valueForm ? this.valueForm.email : null, [Validators.required, Validators.email]],
      courses: [this.valueForm ? '1' : null, [Validators.required]]
    })

  }

  submit() {
    //console.log(this.formAlumno.controls['name'].errors['minlength'])
    
    console.log(this.formAlumno);

    if (!this.formAlumno.invalid) {
      this.studentService.getStudents().subscribe(student => {
        this.student = student;
      })
      if (this.valueForm != null) {
        let studentEdit: Student = {
          id:this.valueForm.id,
          name: this.formAlumno.get('name').value,
          surname: this.formAlumno.get('surname').value,
          email: this.formAlumno.get('email').value,
          photo: this.valueForm.photo,
          courses: this.valueForm.courses
        }
        console.log(studentEdit)
        this.editStudent.next(studentEdit);
      } else {
        let studentNew: Student;
        let id = this.student[this.student.length - 1] ? this.student[this.student.length - 1].id + 1 : 1;

        this.courseService.getCoursesID(parseInt(this.formAlumno.value.courses)).subscribe(course => {
          this.formAlumno.controls['courses'].setValue(course);
          studentNew = {
            id,
            name: this.formAlumno.get('name').value,
            surname: this.formAlumno.get('surname').value,
            email: this.formAlumno.get('email').value,
            photo: null,
            courses: [{
              id: course.id, course: course.course,
              teachers: course.teachers,
              students: course.students
            }]
          }

        })
        console.log(studentNew)
        this.addStudent.next(studentNew);
      }
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
    if(value?.hasError('email')){
      return 'Not a valid email';
    }

    return value.hasError('required') ? 'You must enter a value' : '';
  }

}
