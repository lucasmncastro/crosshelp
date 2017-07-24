import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    return new Promise((resolve, reject) => {
      var params = { email: email, password: password };

      this.http
        .post('http://localhost:3000/api/v1/sessions', params)
        .subscribe(
          (data)  => resolve(data),
          (error) => {
            console.warn('Authentication error!');
            reject(error);
          }
        );
    });
  }
}
