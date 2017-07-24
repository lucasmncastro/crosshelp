import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { TicketService } from './ticket.service';
import { TicketListComponent } from './ticket-list.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketFormComponent } from './ticket-form.component';
import { HelpComponent } from './help.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailComponent,
    TicketFormComponent,
    HelpComponent,
    LoginComponent,
    ReportsComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MomentModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',                redirectTo: '/tickets', pathMatch: 'full' },
      { path: 'tickets/new',     component: TicketFormComponent },
      { path: 'tickets',         component: TicketListComponent },
      { path: 'tickets/:status', component: TicketListComponent },
      { path: 'ticket/:id',      component: TicketDetailComponent },
      { path: 'help',            component: HelpComponent },
      { path: 'login',           component: LoginComponent },
      { path: 'reports',         component: ReportsComponent },
      { path: 'settings',        component: SettingsComponent }
    ])
  ],
  providers: [
    TicketService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
