import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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

  getRole() {
    return window.localStorage['role'];
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
