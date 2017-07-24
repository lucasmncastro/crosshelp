import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.localStorage['authToken'] = '';
  }

  doLogin() {
    window.localStorage['authToken'] = 'false-token';

    this.router.navigate(['/']);
  }

}
