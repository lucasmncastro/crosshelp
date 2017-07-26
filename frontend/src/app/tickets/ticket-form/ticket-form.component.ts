import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ticket } from '../shared/ticket';
import { TicketService } from '../shared/ticket.service';


@Component({
  selector: 'ticket-form', 
  templateUrl: './ticket-form.component.html',
})
export class TicketFormComponent implements OnInit {

  // List of ticket status used on side menu to filter them.
  // TODO Move to a shared place.
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
    let current = this;
    this.service
      .create(this.item)
      .then(
        (data) => { 
          current.item = data;
          this.router.navigate(['/ticket/', current.item.id])
        },
        (err) => this.message = {type: 'danger', message: 'Ops, something goes wrong!' }
      );
  }

}
