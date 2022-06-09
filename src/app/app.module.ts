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

// import { TablaCourseIDComponent } from './components/courses/tabla-course-id/tabla-course-id.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material.module';

import { TitleDirective } from './utils/title.directive';
;

import { CourseModule } from './components/courses/course.module';
import { StudentModule } from './components/student/student.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    MenuComponent,
    TitleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    CourseModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
