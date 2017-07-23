import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketListComponent } from './ticket-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrossHelp';
}
