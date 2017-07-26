import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Ticket } from '../shared/ticket';
import { TicketService } from '../shared/ticket.service';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';


@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  title: string;
  list:  any;

  // List of ticket status used on side menu to filter them.
  statusList = [
    {name: "All tickets", value: ''},
    {name: "Open",        value: 'open' },
    {name: "Closed",      value: 'closed'}
  ];
  selectedStatus: any;

  constructor(
    private service: TicketService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        var status:string = params.get('status') || '';

        this.selectedStatus = this.statusList.filter(item => (item.value == status))[0];
        if (this.selectedStatus) {
          this.title = this.selectedStatus.name;
        }

        return this.service.getList(status)
      })
      .subscribe(data => this.list = data);
  }

  getList(status) {
    this.service.getList(status).then(data => this.list = data);
  }

}
