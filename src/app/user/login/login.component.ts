import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  mouseoverLogin: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  login(formValue: any) {
    this.authService.loginUser(formValue.userName, formValue.password)
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
