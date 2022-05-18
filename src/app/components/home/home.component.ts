import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/Alumno';
import { Curso } from 'src/app/interfaces/Curso';
import { Profesor } from 'src/app/interfaces/Profesor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public parrafo = 'esto es un parrafo en minuscula que se va a transformar en mayuscula a traves de pipe'
  public isMayus = true;
  public alumnos:Alumno[] = [
    {id:1,nombre:"Alumno 1",apellido:"Alumno 1",email:"email",foto:"foto", aprobado:true},
    {id:2,nombre:"Alumno 2",apellido:"Alumno 2",email:"email",foto:"foto", aprobado:false},
    {id:3,nombre:"Alumno 3",apellido:"Alumno 3",email:"email",foto:"foto", aprobado:false},
    {id:4,nombre:"Alumno 4",apellido:"Alumno 4",email:"email",foto:"foto", aprobado:undefined},
    {id:5,nombre:"Alumno 5",apellido:"Alumno 5",email:"email",foto:"foto", aprobado:undefined},
    {id:6,nombre:"Alumno 6",apellido:"Alumno 6",email:"email",foto:"foto", aprobado:undefined},
    {id:7,nombre:"Alumno 7",apellido:"Alumno 7",email:"email",foto:"foto", aprobado:undefined},
    {id:8,nombre:"Alumno 8",apellido:"Alumno 8",email:"email",foto:"foto", aprobado:undefined},
  ];
  
  public profesor = new Profesor(1,"Facundo","Sanchez","facuujos@gmail.com",null);
  
  public cursos:Curso[]=[
    {id:1,curso:"Programacion",profesor:this.profesor,alumnos:this.alumnos}
  ]
  
  constructor() { }

  ngOnInit(): void {

  }
  cambiarStyle(){
    return this.isMayus = this.isMayus ? false : true;
  }
}
