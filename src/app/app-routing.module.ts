import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProbandoComponent } from './components/probando/probando.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { TableCourseComponent } from './components/table-course/table-course.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'students',component:FormAlumnoComponent},
  {path:'courses',component:TableCourseComponent},
  {path:'p',component:ProbandoComponent},
  {path:'teacher/form/:id',component:ProbandoComponent},
  // {path:'course',component:ProbandoComponent},
  // {path:'admin',component:ProbandoComponent},
  // {path:'student',component:ProbandoComponent},
  // {path:'teacher',component:ProbandoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
