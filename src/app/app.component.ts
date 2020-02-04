import { Component } from '@angular/core';
import { RouterGuardService } from './service/router-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAdmin = this.routeGuard.user.isAdmin;
  
  constructor(private routeGuard: RouterGuardService){
  }

  toggleAdmin(){
    this.routeGuard.toggleAdmin();
    this.isAdmin =this.routeGuard.user.isAdmin;
  }

}
