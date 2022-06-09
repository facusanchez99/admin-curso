import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponentComponent } from './first-component/first-component.component';


@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
