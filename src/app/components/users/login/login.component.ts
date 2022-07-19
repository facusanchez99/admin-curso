import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';

import { select, Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/User';
import { loadFeatureLogins, loadFeatureLoginsSuccess } from 'src/app/Store/Features/Login/feature-login.actions';
import { selectUser } from 'src/app/Store/Features/Login/feature-login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$: Observable<User[]> = this.store.select(state => state.user);

  private userActive:User;
  formUser: FormGroup;
  error: boolean = false;
  public load:boolean = false

  constructor(
    private actions$: Actions,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private store: Store<{ user: User[] }>,
  ) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      username: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
      role: [null, []]
    })

  }

  onSubmit() {
    this.load = true;
    this.store.dispatch(loadFeatureLogins());
    if (!this.formUser.invalid) {
      this.userService.getUser();
      this.userService.getUser().subscribe(user =>{
        const userLoad = user.find(u => u.username === this.formUser.get('username').value)
        if(userLoad){
          this.userActive = userLoad;
          this.store.dispatch(loadFeatureLoginsSuccess({user:this.userActive}));
          this.userService.sessionActive(true,userLoad);
          this.router.navigate(['/home']);
        }
      })
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
