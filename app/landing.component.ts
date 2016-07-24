import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'landing-component',
  template: `
    <h3>this is landing page</h3>
    <a routerLink='/welcome' routerLinkActive="active">Welcome page</a>
    <a routerLink='/login' routerLinkActive="active">login page</a>
    <button (click)='gotoUser()'>got to user</button>
  `,
  directives:[ROUTER_DIRECTIVES]
})


export class LandComponent { 
  user:number;
  constructor(
    private router: Router
  ){
    this.user = Math.random();
  }

  gotoUser(){
    this.router.navigate(['/user', this.user]);
  }

}
