import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { ProbandoComponent } from './components/probando/probando.component';
// import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
// import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { TableCourseComponent } from './components/table-course/table-course.component';
import { StudentsComponent } from './components/students/students.component';
import { TablaHomeComponent } from './components/tabla-home/tabla-home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:TableCourseComponent,pathMatch:'full'},
  // {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:TableCourseComponent},
  {path:'students',component:StudentsComponent},
  {path:'courses',component:TableCourseComponent},
  // {path:'p',component:ProbandoComponent},
  {path:'course/:id',component:TablaHomeComponent},
  // {path:'course/edit/:id',component:TablaHomeComponent},
  // {path:'students/edit/:id',component:TablaHomeComponent},
  // {path:'course',component:ProbandoComponent},
  // {path:'admin',component:ProbandoComponent},
  {path:'p',component:ProbandoComponent},
  // {path:'teacher',component:ProbandoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
