import {Alumno} from './Alumno'
import { Profesor } from './Profesor';

export class Curso{
    id:number;
    curso:string;
    profesor:Profesor
    alumnos:Alumno[];

}