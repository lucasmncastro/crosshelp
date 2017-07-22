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

  tickets: Ticket[];
  
  // List of ticket status used on side menu to filter them.
  statusesList = [
    {name: "All tickets", value: ''},
    {name: "Open",        value: 'open' },
    {name: "Closed",      value: 'closed'}
  ];
  currentStatus: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.onSelect('');
  }

  onSelect(status='') {
    console.info(this.statusesList);
    this.currentStatus = this.statusesList.filter(item => (item.value === status))[0];
    this.getTickets(status);
  }

  getTickets(status) {
    this.http.get<Ticket[]>(`http://localhost:3000/tickets?with_status=${status}`).subscribe(data => {
      this.tickets = data;
    });
  }
}
