import { Component } from '@angular/core';


/*
                          Using Button Click to Send Data Child to Parent Component in Angular

==> user.component.html

<button type="button" (click)="sendData()">Send Data</button>

==> user.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Output() childComponent: EventEmitter<any> = new EventEmitter();

   sendData(){
    let item = {
      name: 'Laptop',
      price: 15000,
      color: 'red'
    }
  this.childComponent.emit(item)
  }

==> app.component.html

<p>Item: {{name}}</p>
<p>Price: {{price}}</p>
<p>Color: {{color}}</p>
<app-user (childComponent)="parentComponent($event)"></app-user>


==> app.component.ts

  name = '';
  price!number;
  color = '';

  parentComponent(evt: any) {
    console.warn(evt);
    this.name = evt.name;
    this.price = evt.price;
    this.color = evt.color;
  }



==> index.html

<body>
  <app-root></app-root>
</body>



*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  name = '';
  price!:number;
  color = '';

  parentComponent(evt: any) {
    console.warn(evt);
    this.name = evt.name;
    this.price = evt.price;
    this.color = evt.color;
  }

}


