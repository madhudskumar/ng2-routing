import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'user-component',
  template: `
    <h3>user component {{id}}</h3>
  `
})

export class UserComponent { 
  sub:any;
  id:any;
  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
