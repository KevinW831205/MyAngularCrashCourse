import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEventsComponent } from './data-events/data-events.component';
import { MyPipePipe } from './data-events/my-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DataEventsComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
