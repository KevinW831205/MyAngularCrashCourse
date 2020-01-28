import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEventsComponent } from './data-events/data-events.component';
import { MyPipePipe } from './data-events/my-pipe.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { HttpServicesComponent } from './http-services/http-services.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './service/person.service';


@NgModule({
  declarations: [
    AppComponent,
    DataEventsComponent,
    MyPipePipe,
    DirectivesComponent,
    HttpServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
