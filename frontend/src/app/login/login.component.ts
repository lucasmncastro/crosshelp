import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  message :string;

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    window.localStorage['authToken'] = '';
  }

  doLogin() {
    this.service.login(this.email, this.password)
    .then(
      data => {
        window.localStorage['authToken'] = data['token'];
        window.localStorage['email'] = data['email'];
        window.localStorage['name'] = data['name'];
        window.localStorage['role'] = data['role'];
        this.router.navigate(['/']);
      },
      err => {
        this.password = "";
        this.message = "Email or password invalid"
      }
    );
  }

}
