import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEventsComponent } from './data-events/data-events.component';
import { MyPipePipe } from './data-events/my-pipe.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { HttpServicesComponent } from './http-services/http-services.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './service/person.service';
import { Page1Component } from './routingDemo/page1/page1.component';
import { Page2Component } from './routingDemo/page2/page2.component';
import { NavComponent } from './routingDemo/nav/nav.component';
import { HomeComponent } from './routingDemo/home/home.component';
import { RouterGuardService } from './service/router-guard.service';
import { AdminComponent } from './routingDemo/admin/admin.component';
import { PageComponent } from './routingDemo/page/page.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    DataEventsComponent,
    MyPipePipe,
    DirectivesComponent,
    HttpServicesComponent,
    Page1Component,
    Page2Component,
    NavComponent,
    HomeComponent,
    AdminComponent,
    PageComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PersonService, RouterGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
