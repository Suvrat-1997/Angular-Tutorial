import { Component } from '@angular/core';

/*
                      ngClass In Angular

ngClass directive allows us to set the css class dynamically for a DOM element.

==> ngClass with  string
==> ngClass with  array
==> ngClass with  object
==> ngClass with  component method

==> app.component.css

.one{
    color: blue;
}
.two{
    font-size: 30px;
}
.three{
    color: green;
}
.four{
    background-color: grey;
}

==> app.component.html

<p [ngClass]="'one'">Using ngClass with string example</p>
<p [ngClass]="'two three four'">Using ngClass with string example apply multiple class</p>
<p *ngFor="let usr of users;" [ngClass]="'one two'">{{usr}}</p>
<p [ngClass]="['one', 'four', 'two']">Using ngClass with array example</p>
<p [ngClass]="{'three': true, 'two': false}">Using ngClass with object example</p> 
<p [ngClass]="getClass('mode')">Using ngClass with component method example</p>

==> app.component.ts

users = ["Suman", "Rahul", "Priya", "Rohit", "Saheb"];

getClass(flag: string) {
    let cssClass;
    if (flag == "mode") {
      cssClass = {
        'three': true,
        'two': true
      };
    } else {
      cssClass = {
        'three': false,
        'two': true,
        'one': true
      };
    }
    return cssClass;
  }

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'add-to-cart';

  users = ["Suman", "Rahul", "Priya", "Rohit", "Saheb"];

  getClass(flag: string) {
    let cssClass;
    if (flag == "mode") {
      cssClass = {
        'three': true,
        'two': true
      };
    } else {
      cssClass = {
        'three': false,
        'two': true,
        'one': true
      };
    }
    return cssClass;
  }

}
