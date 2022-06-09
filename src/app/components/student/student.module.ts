import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';

import { MaterialModule } from 'src/app/module/material.module';

import { TableStudentsComponent } from './table-students/table-students.component';
import { ModalStudentComponent } from './table-students/modal-student/modal-student.component';
import { FormStudentComponent } from './form-student/form-student.component';


@NgModule({
  declarations: [
    StudentComponent,
    TableStudentsComponent,
    FormStudentComponent,
    ModalStudentComponent,
  ],
  imports: [
    StudentRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormStudentComponent
  ]
})
export class StudentModule { }
