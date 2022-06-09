import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { TablaHomeComponent } from './components/tabla-home/tabla-home.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { FormCursoComponent } from './components/courses/form-curso/form-curso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/module/material.module';
import { ModalCourseComponent } from './components/table-course/modal-course/modal-course.component';
import { ConverNameSurnamePipe } from './utils/converNameSurname.pipe';
import { Conversor2Pipe } from './utils/conversor2.pipe';
import { Conversor3Pipe } from './utils/conversor3.pipe';
import { Conversor4Pipe } from './utils/conversor4.pipe';
import { StudentsComponent } from './components/students/students.component';
import { TitleDirective } from './utils/title.directive';
import { ModalStudentComponent } from './components/students/modal-student/modal-student.component';
import { TableCourseComponent } from './components/table-course/table-course.component';
TableCourseComponent


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    MenuComponent,
    TablaHomeComponent,
    FormAlumnoComponent,
    FormCursoComponent,
    ModalCourseComponent,
    ConverNameSurnamePipe,
    Conversor2Pipe,
    Conversor3Pipe,
    Conversor4Pipe,
    StudentsComponent,
    TitleDirective,
    ModalStudentComponent,
    TableCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
