import { Course } from "./Course";

export interface Student{
    id?:number;
    name:string;
    surname:string;
    email:string;
    photo?:string;
    courses?:Course[];



}