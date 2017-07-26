import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { TicketService } from './tickets/shared/ticket.service';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketComponent,
    TicketFormComponent,
    HelpComponent,
    LoginComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MomentModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',                redirectTo: '/tickets', pathMatch: 'full' },
      { path: 'tickets',         component: TicketListComponent },
      { path: 'tickets/new',     component: TicketFormComponent },
      { path: 'tickets/:status', component: TicketListComponent },
      { path: 'ticket/:id',      component: TicketComponent },
      { path: 'help',            component: HelpComponent },
      { path: 'login',           component: LoginComponent },
      { path: 'reports',         component: ReportsComponent },
    ])
  ],
  providers: [
    TicketService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
