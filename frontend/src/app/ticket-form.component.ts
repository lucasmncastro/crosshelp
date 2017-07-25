import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  item: any;
  message: any;

  constructor(
    private service: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedStatus = null;
    this.item = new Ticket();
  }
  
  save() {
    this.service
      .create(this.item)
      .then(
        (data) => { 
          this.item = data;
          this.router.navigate(['/ticket/', this.item.id])
        },
        (err) => this.message = {type: 'danger', message: 'Ops, something goes wrong!' }
      );
  }

}
