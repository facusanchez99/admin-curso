import { Observable, of, throwError } from "rxjs";


export class User{
    id:number;
    name:string;
    email:string;
    password:string;

    constructor(name:string){
        this.name = name;
    }

    obtenerUsuario():Observable<any>{
        // return new Promise((resolve,reject)=>{
        //     if(this.name){
        //         return resolve([{name:'username'}])
        //     }
        //     return reject({message:'error'})
        // })
        if(this.name){
            return of([{username:this.name}])
        }else{
            return throwError(()=> new Error('ERROR 404'))
        }
      
    }
}