import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'CrossHelp';

  constructor(private router: Router) {
  }

  userSignedIn() {
    let token = window.localStorage['authToken'] 
    return token && token != '';
  }

  getUsername() {
    return window.localStorage['name'];
  }

  getRole() {
    return window.localStorage['role'];
  }

  ngOnInit() {
    if (! this.userSignedIn()) {
      this.router.navigate(['/login']);
    }
  }

  canReports() {
    switch(this.getRole()) {
      case "admin": { return true  }
      case "agent": { return true }
      default:      { return false }
    }
  }

  canSettings() {
    switch(this.getRole()) {
      case "admin": { return true  }
      case "agent": { return false }
      default:      { return false }
    }
  }
}
