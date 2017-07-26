import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service';
import { TicketService } from '../tickets/shared/ticket.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  authorId: string;
  year: number;
  month: number;

  authorList: any;
  ticketList: any;

  years: any;
  months = [
    {name: 'January',   value: 1},
    {name: 'February',  value: 2},
    {name: 'March',     value: 3},
    {name: 'April',     value: 4},
    {name: 'May',       value: 5},
    {name: 'June',      value: 6},
    {name: 'July',      value: 7},
    {name: 'August',    value: 8},
    {name: 'September', value: 9},
    {name: 'October',   value: 10},
    {name: 'November',  value: 11},
    {name: 'December',  value: 12}
  ];

  constructor(
    private userService: UserService, 
    private ticketService: TicketService
  ) { 
    this.authorList = [];
    this.ticketList = [];
    this.authorId   = '';

    // TODO Get them dynamically with moment library.
    this.years      = [2015, 2016, 2017];
    this.year       = 2017;
    this.month      = 7;
  }

  ngOnInit() {
    this.updateAuthorList()
    this.updateReport()
  }

  updateAuthorList() {
    this.userService.getList('').then(data => { 
      this.authorList = data;
    });
  }

  updateReport() {
    this.ticketService.getReportList('closed', this.authorId, this.year, this.month).then(data => { 
      this.ticketList = data;
    });
  }

}
