import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';


@Component({
  selector: 'ticket-form', 
  templateUrl: './ticket-form.component.html',
})
export class TicketFormComponent implements OnInit {

  // List of ticket status used on side menu to filter them.
  // TODO Move to other place can be accessed globally.
  statusList = [
    {name: "All tickets", value: ''},
    {name: "Open",        value: 'open' },
    {name: "Closed",      value: 'closed'}
  ];
  selectedStatus: any;

  item: Ticket;
  message: any;

  constructor(private service: TicketService) { }

  ngOnInit(): void {
    this.selectedStatus = null;
    this.item = new Ticket();
  }
  
  save() {
    this.service.
      create(this.item).
      then(
        data => {
          this.message = {type: 'success', message: 'Ticket successfully saved!' }
          this.item = new Ticket();
        },
        err => {
          this.message = {type: 'danger', message: 'Ops, something goes wrong!' }
        }
    );
  }

}
