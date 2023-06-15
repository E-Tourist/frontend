import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.less']
})
export class LogInComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  logInWithCredentials() {
    const usernameProvided = this.loginForm.value.username;
    const passwordProvided = this.loginForm.value.password;

    if (!usernameProvided || !passwordProvided) {
      alert('Podaj login i hasło');
      return;
    }

    this.authService.logIn(usernameProvided, passwordProvided);
    this.router.navigate(["/"]);
  }

  logInWithOauth() {
    this.authService.logIn("", "");
  }
}
