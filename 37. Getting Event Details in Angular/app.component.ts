import { Component } from '@angular/core';


/*
                            Getting Event Details in Angular
                            

==> app.component.html

<select name="user" (change)="changeUser($event)">
    <option selected disabled>Select User</option>
    <option value="{{usr}}" *ngFor="let usr of userList;">{{usr}}</option>
</select>

<button type="button" (click)="myFun($event)">Click Me</button>

==> app.component.ts

userList = ['Suman', 'Rahul', 'Sumit', 'Rohit', 'Sam', 'Priya'];

  changeUser(evt: any){
    alert("Changed User from the User List");
    console.log(evt);
  }

  myFun(evt: any){
    alert("Button is Clicked");
    console.log(evt);    
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

  userList = ['Suman', 'Rahul', 'Sumit', 'Rohit', 'Sam', 'Priya'];

  changeUser(evt: any){
    alert("Changed User from the User List");
    console.log(evt);
  }

  myFun(evt: any){
    alert("Button is Clicked");
    console.log(evt);    
  }
  
}


