import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrossHelp';

  constructor(router: Router) {
    if (! this.userSignedIn()) {
      router.navigate(['/login']);
    }
  }

  userSignedIn() {
    return window.localStorage['authToken'] != '';
  }

  getUsername() {
    return window.localStorage['name'];
  }
}
