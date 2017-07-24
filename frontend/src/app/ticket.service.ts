import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ticket } from './ticket';


const URL_BASE: string = 'http://localhost:3000/api/v1/tickets';

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) {}

  getList(status) {
    return new Promise((resolve, reject) => { 
      this.http.get(`${URL_BASE}?with_status=${status}`, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }

  getItem(id) {
    return new Promise((resolve, reject) => { 
      this.http.get(`${URL_BASE}/${id}`, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }

  create(ticket) {
    return new Promise((resolve, reject) => {
      this.http.post(URL_BASE, {'ticket': ticket}, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  save(ticket) {
    return new Promise((resolve, reject) => {
      this.http.put(`${URL_BASE}/${ticket.id}`, {'ticket': ticket}, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  delete(ticket) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${URL_BASE}/${ticket.id}`, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  private options() {
    var headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization': 'Token token=' + window.localStorage['authToken'],
      'Accept':        'application/json'
    });

    return {headers: headers};
  }

}
