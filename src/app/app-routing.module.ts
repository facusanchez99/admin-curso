import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
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
