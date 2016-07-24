import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  selector: 'my-app',
  template: `
    <h3>page is</h3>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})


export class AppComponent { }
