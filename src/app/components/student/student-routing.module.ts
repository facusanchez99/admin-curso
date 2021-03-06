import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableStudentsComponent } from './table-students/table-students.component';


const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: TableStudentsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
