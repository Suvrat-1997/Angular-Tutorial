import { Component } from '@angular/core';


/*
                            Send Data Child to Parent Component in Angular

==> app.component.html


<app-user (childComponent)="parentComponent($event)"></app-user>


==> app.component.ts

  parentComponent(evt: any){
    console.warn(evt);
  }

==> user.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Output() childComponent: EventEmitter<any> = new EventEmitter();

   ngOnInit(): void {
    this.childComponent.emit('Hello World');  // passing message
    this.childComponent.emit({
      name: 'Rahul',
      age: 25
    });  // passing object
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

  parentComponent(evt: any) {
    console.warn(evt);
  }

}


