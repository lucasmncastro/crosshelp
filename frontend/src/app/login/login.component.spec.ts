import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }             from '@angular/platform-browser';
import { DebugElement }   from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { Router }         from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService }    from '../auth.service';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

class AuthServiceStub {
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture:   ComponentFixture<LoginComponent>;
  let de:        DebugElement;
  let el:        HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: AuthService, useClass: AuthServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an email field', () => {
    de = fixture.debugElement.query(By.css('input#email'));
    el = de.nativeElement;
    expect(el).toBeTruthy();
  });

  it('should contain a password field', () => {
    de = fixture.debugElement.query(By.css('input#password'));
    el = de.nativeElement;
    expect(el).toBeTruthy();
  });

});
