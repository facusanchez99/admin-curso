export class Persona{
    id:number;
    nombre:string;
    apellido:string;
    email:string;
    foto:string;

    constructor(
        id:number,
        nombre:string,
        apellido:string,
        email:string,
        foto:string
    ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.foto = foto;
    }
}