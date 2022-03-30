import { Component } from '@angular/core';

/*

Pass data from parent to child component using @Input() decorator, which allows data to pass through templates and child to parent component using @Output() decorator with the help of Event Emitter.

==> app.component.html

  <form>
      <input name="yourname" type="text" [(ngModel)]="name" placeholder="Enter your name" /> 

      <button type="button" (click)="submit()">Submit</button>
      <h3>{{this.message}}</h3>
  </form>
  <app-child [Name]="sendToChild" (getResponse)="getResponse($event)"></app-child>


==> app.component.ts

name!: string;  
  message!: any;  
  sendToChild!: string;  
  
  getResponse($event: Event) {  
    this.message = $event;  
  }  

  submit() {  
    this.sendToChild = this.name;  
  }  

==> child.component.html   

  {{this.Name}}   
  <button type="button" (click)="onClick()">Ok</button> 

==> child.component.ts

  import { EventEmitter, Input, Output } from '@angular/core';

  @Component({
    selector: 'app-child'
  })

  @Input() Name!: string;  
  @Output() getResponse = new EventEmitter;
  
  
  onClick() {  
    this.getResponse.emit('Message from child');  
  } 

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-emitter';
  name!: string;
  message!: any;
  sendToChild!: string;

  getResponse($event: Event) {
    this.message = $event;
  }

  submit() {
    this.sendToChild = this.name;
  }

}
