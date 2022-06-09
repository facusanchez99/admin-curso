import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormCursoComponent } from './form-curso/form-curso.component';

import { TableCourseComponent } from './table-course/table-course.component';
import { TablaCourseIDComponent } from './tabla-course-id/tabla-course-id.component';
import { MaterialModule } from 'src/app/module/material.module';
import { ModalCourseComponent } from './table-course/modal-course/modal-course.component';

import { CourseComponent } from './course.component';
import { StudentModule } from '../student/student.module';


@NgModule({
  declarations: [
    CourseComponent,
    ModalCourseComponent,
    TableCourseComponent,
    TablaCourseIDComponent,
    FormCursoComponent
  ],
  imports: [
    StudentModule,
    MaterialModule,
    CourseRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[]
})
export class CourseModule { }
