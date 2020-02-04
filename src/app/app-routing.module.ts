import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './routingDemo/page1/page1.component';
import { Page2Component } from './routingDemo/page2/page2.component';
import { HomeComponent } from './routingDemo/home/home.component';


const routes: Routes = [
  { path: "page1", component: Page1Component },
  { path: "page2", component: Page2Component },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
