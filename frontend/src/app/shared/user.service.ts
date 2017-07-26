import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const URL_BASE: string = 'http://localhost:3000/api/v1/users';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getList(role="client") {
    return new Promise((resolve, reject) => { 
      this.http.get(`${URL_BASE}?with_role=${role}`, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }

  getItem(id) {
    return new Promise((resolve, reject) => { 
      this.http.get(`${URL_BASE}/${id}`, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }

  create(user) {
    return new Promise((resolve, reject) => {
      this.http.post(URL_BASE, {'user': user}, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  save(user) {
    return new Promise((resolve, reject) => {
      this.http.put(`${URL_BASE}/${user.id}`, {'user': user}, this.options())
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  delete(user) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${URL_BASE}/${user.id}`, this.options())
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
