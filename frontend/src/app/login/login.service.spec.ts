import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { LoginService } from './login.service';

class HttpClientMock {
  post(url, params) {
    if (params.password == 'valid') {
      return Observable.of({
        email:      'valid@email.com',
        name:       'Alex',
        role:       'admin',
        auto_token: 'token'
      });
    } else {
      return Observable.of(undefined);
    }
  }
}

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        { provide: HttpClient, useClass: HttpClientMock },
      ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should store user after successful login', inject([LoginService], (service: LoginService) => {
    service.login('alex@email.com', 'valid').then(() => {
      expect(service.user.name).toBe('Alex');
    })
  }));

  it('should keep user undefined after fail login', inject([LoginService], (service: LoginService) => {
    service.login('invalid@email.com', 'invalid').then(() => {
      expect(service.user).toBe(undefined);
    })
  }));
});
