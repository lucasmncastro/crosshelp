import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Ticket {
  id: number;
  title: string;
  user: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CrossHelp';

  private tickets: Ticket[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Ticket[]>('http://localhost:3000/tickets').subscribe(data => {
      this.tickets = data;
    });
  }
}
