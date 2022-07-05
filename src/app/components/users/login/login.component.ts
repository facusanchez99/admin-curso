import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/User';
import { loadFeatureLoginsSuccess } from 'src/app/Store/Features/Login/feature-login.actions';
import { selectUser } from 'src/app/Store/Features/Login/feature-login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$: Observable<User[]> = this.store.select(state => state.user);



  formUser: FormGroup;
  error: boolean = false;
  private users: User[];


  constructor(
    private actions$: Actions,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private store: Store<{ user: User[] }>,
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.users = user;
    });

    this.store.select(selectUser).subscribe(val =>console.log(val))

    this.formUser = this.formBuilder.group({
      username: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
      role: [null, [Validators.required]]
    })

    // this.store.select(selectLog)
    this.store.select(selectUser).subscribe(
      (val) => {
        console.log(val)
      }
    )
  
    this.store.dispatch({ type: '[User Page] Load user' });
    // this.store.dispatch(loadFeatureLoginsSuccess())
    // console.log(users$)

  }

  onSubmit() {
    if (!this.formUser.invalid) {
      sessionStorage.setItem('username', this.formUser.get('username').value)
      sessionStorage.setItem('role', this.formUser.get('role').value)
      const user: User = {
        id: 0,
        username: '',
        password: '',
        role: ''
      }
      this.router.navigate(['/home']);
    }
  }

  getErrorMessage(value: any) {
    if (value?.errors?.['minlength']) {
      return 'The minimum character is 2';
    }
    if (value?.errors?.['maxlength']) {
      return 'The maximum number of characters has been exceeded';
    }
    if (value?.hasError('email')) {
      return 'Not a valid email';
    }

    return value.hasError('required') ? 'You must enter a value' : '';
  }

}
