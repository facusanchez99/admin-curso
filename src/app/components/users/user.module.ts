import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/module/material.module';
import * as fromUser from '../../Store/Features/Login/feature-login.reducer';
import { FeatureLoginEffects } from 'src/app/Store/Features/Login/feature-login.effects';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUser.featureLoginFeatureKey,fromUser.reducer),
  ],
  exports:[
    LoginComponent
  ],
  providers:[
    FeatureLoginEffects,
    {
      provide:USER_PROVIDED_EFFECTS,
      multi:true,
      useValue:[FeatureLoginEffects]
    }
  ]
})
export class UserModule { }
