import { Component } from '@angular/core';

/*

                                      (change) Event in Angular

  
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

  choice = '';

  constructor() { }

  selectColor(evt: any) {
    this.choice = evt.target.value;
    console.log('Selected Color: ', this.choice);
  }



}
