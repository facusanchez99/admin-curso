import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProbandoComponent } from './components/probando/probando.component';


import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./components/courses/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./components/courses/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./components/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
