import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { TablaHomeComponent } from './components/tabla-home/tabla-home.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { FormCursoComponent } from './form-curso/form-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    MenuComponent,
    TablaHomeComponent,
    FormAlumnoComponent,
    FormCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
