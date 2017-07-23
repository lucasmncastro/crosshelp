import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';

import { TicketListComponent } from './ticket-list.component';
import { TicketDetailComponent } from './ticket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
