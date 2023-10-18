import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authenticationError  = false;

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router ) {}

  login() {
    let user = this.authService.login(
      this.loginForm.value.username, 
      this.loginForm.value.password);

      if (!user){
        this.authenticationError = true;
      } else {
        this.router.navigateByUrl('/newOrder');
      }
  }

  clearError() {
    this.authenticationError = false;
  }
}
