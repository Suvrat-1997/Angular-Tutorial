import { Component } from '@angular/core';


/*
                            Directive in Angular

Directive are classes that add additional behavior of elements in your Angular Applications.
You can define your own directives to attach custom behavior to elements in the DOM.

We have 3 directive in angular: -----

i) Components: 

Directives with a template. This type of directive is the most common directive type.

ii) Attribute Directives: 

Deal with changing the look and behavior of the elements, component, or another directive.

Some built-in attribute directive are:---

ngClass: Adds and removes a set of css classes.
ngStyle: Adds and removes a set of HTML style.
ngModel: Adds two-way data binding to an HTML form element.

iii) Structural Directives:

Directives that are change the DOM layout by adding and removing DOM elements.
Structural directives have a * sign before the directive.
For Ex: *ngIf, *ngFor, etc.


Create Custom Directive

==> ng g directive directive/changeText

CREATE src/app/directive/change-text.directive.spec.ts
CREATE src/app/directive/change-text.directive.ts
UPDATE src/app/app.module.ts

==> app.module.ts

import { ChangeTextDirective } from './directive/change-text.directive';

declarations: [
    ChangeTextDirective
  ],

==> change-text.directive.ts

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.innerText = 'Text is changed by appChangeText directive';
   }

}

==> app.component.html

<h2 appChangeText>Wellcome to {{name}}</h2>

==> app.component.ts

name = 'Rahul Dixit';

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
  name = 'Rahul Dixit';  
}


