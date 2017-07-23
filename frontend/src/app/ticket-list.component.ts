import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';
import { TicketFormComponent } from './ticket-form.component';


@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  title:        string;
  list:         any;
  item:         Ticket;
  selectedItem: Ticket;

  // List of ticket status used on side menu to filter them.
  statusList = [
    {name: "All tickets", value: ''},
    {name: "Open",        value: 'open' },
    {name: "Closed",      value: 'closed'}
  ];
  selectedStatus: any;


  constructor(private service: TicketService) { }


  ngOnInit(): void {
    this.selectStatusFilter();
  }

  selectStatusFilter(status='') {
    this.selectedStatus = this.statusList.filter(item => (item.value === status))[0];
    this.title = this.selectedStatus.name;
    this.getList(status);
    this.selectedItem = null;
    this.item = null;
  }

  getList(status) {
    this.service.getList(status).then(data => this.list = data);
  }

  newItem() {
    this.selectedItem = null;
    this.list = null;
    this.item = new Ticket();
  }

  selectItem(item) {
    this.list = null;
    this.item = null;
    this.selectedItem = item;
  } 
}
