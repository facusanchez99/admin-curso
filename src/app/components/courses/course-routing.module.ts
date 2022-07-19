import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaCourseIDComponent } from './tabla-course-id/tabla-course-id.component';
import { TableCourseComponent } from './table-course/table-course.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TableCourseComponent
      },
      {
        path: 'courses/:id',
        component: TablaCourseIDComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
