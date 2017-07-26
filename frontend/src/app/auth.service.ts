import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public user: any;

  login(email, password) {
    let current = this;

    return new Promise((resolve, reject) => {
      var params = { email: email, password: password };

      this.http
        .post('http://localhost:3000/api/v1/sessions', params)
        .subscribe(
          (data) => { 
            current.user = data;
            resolve(data);
          },
          (error) => {
            current.user = undefined;
            reject(error);
          }
        );
    });
  }
}
