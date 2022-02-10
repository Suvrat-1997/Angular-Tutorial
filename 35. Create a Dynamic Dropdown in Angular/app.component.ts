import { Component } from '@angular/core';


/*
                            Create a Dynamic Dropdown in Angular

==> app.component.html

<form>
<select name="days" id="days">
    <option disabled selected>Select Days</option>
    <option value="{{dy}}" *ngFor="let dy of days">{{dy}}</option>
</select>
</form>

==> app.component.ts

days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

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

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
  
}


