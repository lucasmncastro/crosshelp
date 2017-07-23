import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';


@Injectable()
export class TicketService {

  private list;

  constructor(private http: HttpClient) {}

  getList(status) {
    return new Promise(resolve => { 
      this.http.get(`http://localhost:3000/tickets?with_status=${status}`).
        subscribe(data => {
          this.list = data;
          resolve(this.list);
        });
    })
  }

  create(ticket) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/tickets', {'ticket': ticket})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  save(ticket) {
    return new Promise((resolve, reject) => {
      this.http.put(`http://localhost:3000/tickets/${ticket.id}`, {'ticket': ticket})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }


  delete(ticket) {
    return new Promise((resolve, reject) => {
      this.http.delete(`http://localhost:3000/tickets/${ticket.id}`)
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

}
