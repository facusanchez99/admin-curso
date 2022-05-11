import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/Alumno';

@Component({
  selector: 'app-tabla-home',
  templateUrl: './tabla-home.component.html',
  styleUrls: ['./tabla-home.component.css']
})
export class TablaHomeComponent implements OnInit {
  @Input() alumnos:Persona;
  @Input() titulo:string;
  constructor() { }

  ngOnInit(): void {
  }

}
