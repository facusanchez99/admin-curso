import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'add-student',component:FormAlumnoComponent},
  {path:'add-course',component:FormCursoComponent},
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
