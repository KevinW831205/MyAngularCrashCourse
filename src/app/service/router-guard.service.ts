import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  // usually provided by another service
  user: { isAdmin: boolean } = {
    isAdmin: false
  }

  constructor(private router: Router) { }

  canActivate() {
    return this.user.isAdmin;
  }

  toggleAdmin(){
    this.user.isAdmin = !this.user.isAdmin;
  }

}
