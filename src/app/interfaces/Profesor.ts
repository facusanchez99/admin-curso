import { Persona } from "./Persona";

export class Profesor extends Persona{
    
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