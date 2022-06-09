import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';

const routes: Routes = [
  // {path:'',component:FirstComponentComponent},
  {path:'hola',component:FirstComponentComponent}
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
