import { Observable, of, throwError } from "rxjs";


export interface User{
    id:number;
    username:string;
    password:string;
    role:String;
}