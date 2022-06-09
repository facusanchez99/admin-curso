import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TableCourseComponent } from './table-course/table-course.component';

const routes: Routes = [
    // {path:'home',component:TableCourseComponent},
    // {path:'courses',component:TableCourseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
