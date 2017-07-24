import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';


@Component({
  selector: 'ticket-detail', 
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  // List of ticket status used on side menu to filter them.
  statusList = [
    {name: "All tickets", value: ''},
    {name: "Open",        value: 'open' },
    {name: "Closed",      value: 'closed'}
  ];
  selectedStatus: any;

  item: any;
  comment: any;
  editMode = false;

  constructor(
    private service: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit() {
    this.editMode = true;
  }

  save() {
    this.service
      .save(this.item)
      .then(
        data => this.editMode = false,
        err  => this.editMode = true
      );
  }

  saveComment(action='') {
    this.service
      .saveComment(this.item, this.comment, action)
      .then(
        data => {
          this.comment = null;
          this.loadItem()
        },
        err  => console.error("Error saving comment"),
      );
  }

  ngOnInit(): void {
    this.item = null;
    this.loadItem();
  }

  loadItem() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        var id = +params.get('id');
        return this.service.getItem(id)
      })
      .subscribe(data => this.item = data);
  }

  delete() {
    this.service
      .delete(this.item)
      .then(data => this.router.navigate(['/tickets/', this.item.status]));
  }
}
