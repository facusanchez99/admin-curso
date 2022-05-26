export class Person{
    id:number;
    name:string;
    surname:string;
    email:string;
    photo:string;

    constructor(
        id:number,
        name:string,
        surname:string,
        email:string,
        photo:string
    ){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.photo = photo;
    }
}