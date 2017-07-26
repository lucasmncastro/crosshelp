import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

class RouterStub {
  navigateByUrl(url: string) { return url; }
  navigate(url: string) { return url; }
}

describe('AppComponent', () => {
  let fixture;
  let app;
  let router;
  let routerSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
      ],
      declarations: [
        AppComponent
      ],
    })
    fixture = TestBed.createComponent(AppComponent);
    app     = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'CrossHelp'`, async(() => {
    expect(app.title).toEqual('CrossHelp');
  }));

  it("should redirect to login page if user isn't logged in", async(() => {
    window.localStorage['authToken'] = ''; // user is not logged in

    router    = TestBed.get(Router);
    routerSpy = spyOn(router, 'navigate');
    fixture   = TestBed.createComponent(AppComponent);

    expect(routerSpy.calls.any()).toBe(true)
    expect(routerSpy.calls.mostRecent().args).toEqual([['/login']])
  }));

  it("should show tickets if user logged in", async(() => {
    window.localStorage['authToken'] = 'token-indicating-the-user-is-logged-in';

    router    = TestBed.get(Router);
    routerSpy = spyOn(router, 'navigate');
    fixture   = TestBed.createComponent(AppComponent);

    expect(routerSpy.calls.any()).toBe(false)
  }));
});
