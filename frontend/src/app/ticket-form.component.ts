import { Component, Input } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';


@Component({
  selector: 'ticket-form', 
  templateUrl: './ticket-form.component.html',
})
export class TicketFormComponent {

  @Input() item: Ticket;
  message: any;

  constructor(private service: TicketService) { }
  
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
