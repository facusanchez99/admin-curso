import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/module/material.module';
import { FormStudentComponent } from './form-student/form-student.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

@NgModule({
  declarations: [
    FormStudentComponent,
    FormCursoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    FormStudentComponent,
    FormCursoComponent
  ]
})
export class FormModule { }
