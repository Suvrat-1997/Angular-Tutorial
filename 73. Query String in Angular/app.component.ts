import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/*

                          Router with Query String in Angular

==> pass in url

http://localhost:4200/?name=ram&id=101


==> app.component.ts

import { ActivatedRoute } from '@angular/router';

name: any;
  id: any;

  constructor( private _router: ActivatedRoute){ 
    this._router.queryParams.subscribe(x=>{
      console.log(x);
      this.name = x['name'];
      this.id = x['id'];
    })
  }

  ==> app.component.html

<h3>Name: {{name}}</h3>
<h3>Id: {{id}}</h3>



*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  name: any;
  id: any;

  constructor( private _router: ActivatedRoute){ 
    this._router.queryParams.subscribe(x=>{
      console.log(x);
      this.name = x['name'];
      this.id = x['id'];
    })
  }


}
