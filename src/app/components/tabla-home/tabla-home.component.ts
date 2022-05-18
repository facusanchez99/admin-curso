import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/Alumno';
import { Curso } from 'src/app/interfaces/Curso';

@Component({
  selector: 'app-tabla-home',
  templateUrl: './tabla-home.component.html',
  styleUrls: ['./tabla-home.component.css']
})
export class TablaHomeComponent implements OnInit {
  @Input() alumno: Alumno;
  @Input() curso:Curso;
  @Input() titulo: string;
  public detalle: Curso;
  public viewDetalle: boolean = false
  constructor() { }

  ngOnInit(): void {

  }

  abrirModal(a) {
    this.detalle = a;
    this.viewDetalle = true;
  }
  cerrarModal() {
    this.viewDetalle = false;
    this.detalle = null;
  }

}
