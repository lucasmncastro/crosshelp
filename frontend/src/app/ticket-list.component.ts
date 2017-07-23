import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';


@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  title:        string;
  list:         Ticket[];
  selectedItem: Ticket;

  // List of ticket status used on side menu to filter them.
  statusList = [
    {name: "All tickets", value: ''},
    {name: "Open",        value: 'open' },
    {name: "Closed",      value: 'closed'}
  ];
  selectedStatus: any;


  constructor(private http: HttpClient) {
    this.selectedItem = null;
  }


  ngOnInit(): void {
    this.selectStatusFilter();
  }

  selectStatusFilter(status='') {
    this.selectedStatus = this.statusList.filter(item => (item.value === status))[0];
    this.title = this.selectedStatus.name;
    this.getList(status);
    this.selectedItem = null;
  }

  getList(status) {
    this.http.get<Ticket[]>(`http://localhost:3000/tickets?with_status=${status}`).subscribe(data => {
      this.list = data;
    });
  }

  selectItem(item) {
    this.selectedItem = item;
  } 
}
