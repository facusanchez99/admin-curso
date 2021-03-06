import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/interfaces/Course';
import { Student } from 'src/app/interfaces/Student';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {

  @Input() courses: Course[]
  @Input() valueForm: Student;
  @Input() readOnly: boolean = false;

  @Output() addStudent = new EventEmitter<Student>();
  @Output() editStudent = new EventEmitter<Student>();

  public formAlumno: FormGroup;
  public error: boolean = false;
  public load:boolean = false;


  public student: Student[];

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.formAlumno = this.formBuilder.group({
      name: [this.valueForm ? this.valueForm.name : null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
      surname: [this.valueForm ? this.valueForm.surname : null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
      email: [this.valueForm ? this.valueForm.email : null, [Validators.required, Validators.email]],
      courses: [this.valueForm ? '1' : null, [Validators.required]]
    })
    this.load = true;
  }

  async submit() {
    if (!this.formAlumno.invalid) {
      this.load = false;
      this.studentService.getStudents().subscribe(student => {
        this.student = student;
      })
      if (this.valueForm != null) {
        let studentEdit: Student = {
          id: this.valueForm.id,
          name: this.formAlumno.get('name').value,
          surname: this.formAlumno.get('surname').value,
          email: this.formAlumno.get('email').value,
          photo: this.valueForm.photo,
          courses: this.valueForm.courses
        }
        this.editStudent.next(studentEdit);
      } else {
        let studentNew: Student;
        
        const course = await this.courseService.getCoursesFormID(this.formAlumno.value.courses)
        this.formAlumno.controls['courses'].setValue(course);

        studentNew = {
          // id,
          name: this.formAlumno.get('name').value,
          surname: this.formAlumno.get('surname').value,
          email: this.formAlumno.get('email').value,
          photo: null,
          courses: [
            this.formAlumno.get('courses').value,
          ]
        }
        this.addStudent.next(studentNew);
      }
      this.load = true;
    } else {

    }

  }

  getErrorMessage(value: any) {
    if (value?.errors?.['minlength']) {
      return 'The minimum character is 2';
    }
    if (value?.errors?.['maxlength']) {
      return 'The maximum number of characters has been exceeded';
    }
    if (value?.hasError('email')) {
      return 'Not a valid email';
    }

    return value.hasError('required') ? 'You must enter a value' : '';
  }
}
