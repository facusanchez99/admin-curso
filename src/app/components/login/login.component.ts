import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser: FormGroup;
  error: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.formUser = this.formBuilder.group({
      username: [null, [Validators.required,Validators.maxLength(60),Validators.minLength(2)]],
      role: [null, [Validators.required]]
    })

  }

  submit() {
 
    if (!this.formUser.invalid) {
      sessionStorage.setItem('username',this.formUser.get('username').value)
      sessionStorage.setItem('role',this.formUser.get('role').value)
      this.router.navigate(['/home']);
    } else {

    }

  }

  getErrorMessage(value:any) {
    if(value?.errors?.['minlength']){
      return 'The minimum character is 2';
    }
    if(value?.errors?.['maxlength']){
      return  'The maximum number of characters has been exceeded';
    }
    if(value?.hasError('email')){
      return 'Not a valid email';
    }

    return value.hasError('required') ? 'You must enter a value' : '';
  }

}
