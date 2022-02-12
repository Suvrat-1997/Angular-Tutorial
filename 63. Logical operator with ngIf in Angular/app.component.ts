import { Component } from '@angular/core';

/*

                                      [ngSwitch] in Angular

  
==> app.component.html

<select (change)="selectColor($event)">
  <option selected disabled>select Color</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="black">Black</option>
  <option value="yellow">Yellow</option>
  <option value="pink">Pink</option>
</select>

<div [ngSwitch]="choice">
  <h1 *ngSwitchCase="'red'" style="color: red;">Red Color Selected</h1>
  <h1 *ngSwitchCase="'green'" style="color: green;">Green Color Selected</h1>
  <h1 *ngSwitchCase="'blue'" style="color: blue;">Blue Color Selected</h1>
  <h1 *ngSwitchCase="'black'" style="color: black;">Black Color Selected</h1>
  <h1 *ngSwitchCase="'yellow'" style="color: yellow;">Yellow Color Selected</h1>
  <h1 *ngSwitchCase="'pink'" style="color: pink;">Pink Color Selected</h1>
  <h1 *ngSwitchDefault>No Color Selected</h1>
</div>

==> app.component.ts

choice = '';

  selectColor(evt: any){
    this.choice = evt.target.value;
    console.log('Selected Color: ',this.choice);    
  }





*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  isLoggedIn = true;
  userType = 'admin';

  constructor() { }

}
