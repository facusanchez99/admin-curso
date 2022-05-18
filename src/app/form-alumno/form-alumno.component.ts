import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  formAlumno:FormGroup;
  error:boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formAlumno = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname:[null,[Validators.required]],
      email: [null, [Validators.required,Validators.email]],
    })
    console.log(this.formAlumno.get('name'))
  }
  submit(){
    if(!this.formAlumno.invalid){
      console.log('valid')
    }else{
      
    }
    console.log(this.formAlumno.value);
  }

}
