import { Persona } from "./Persona";

export class Alumno extends Persona{

    aprobado:boolean;

    constructor(
        id:number,
        nombre:string,
        apellido:string,
        email:string,
        foto:string
    ){
        super(id,nombre,apellido,email,foto);
    }
}