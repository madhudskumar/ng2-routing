import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'landing-component',
  template: `
    <h3>this is landing page</h3>
    <a routerLink='/welcome' routerLinkActive="active">Welcome page</a>
    <a routerLink='/login' routerLinkActive="active">login page</a>
    <a routerLink='/user' routerLinkActive="active">user page</a>
  `,
  directives:[ROUTER_DIRECTIVES]
})


export class LandComponent { }
