import { Component, Input } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';


@Component({
  selector: 'ticket-detail', 
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent {

  @Input() item: Ticket;
  editMode = false;

  constructor(private service: TicketService) { }

  edit() {
    this.editMode = true;
  }

  save() {
    this.service.
      save(this.item).
      then(
        data => this.editMode = false,
        err  => this.editMode = true
      );
  }

  delete() {
    this.service.
      delete(this.item).
      then(
        data => console.info("Deleted!"),
        err  => console.info("Error, maybe it already was deleted!")
      );
  }
}
