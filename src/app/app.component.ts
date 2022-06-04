import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'admin-curso';

  valuetocheck= true;
  public asyncObservable:Observable<string>
  
  ngOnInit(): void {
    this.asyncObservable = this.conObservable('observable')
  }

  conObservable(value:string):Observable<string>{
    return of(value).pipe(delay(2000));
  }
  
}
