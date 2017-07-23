import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { TicketService } from './ticket.service';
import { TicketListComponent } from './ticket-list.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketFormComponent } from './ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailComponent,
    TicketFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MomentModule,
    FormsModule,
  ],
  providers: [
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
