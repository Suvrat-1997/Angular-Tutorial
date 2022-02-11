import { Component } from '@angular/core';


/*
                          Custom Directive in Angular

Directive are used to manipulate HTML element/DOM element.


==> ng g directive directive/custom-style

==> custom-style.directive.ts

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(elem: ElementRef) { 
    elem.nativeElement.style.color = 'red';
    elem.nativeElement.style.backgroundColor = 'skyblue';
    // elem.nativeElement.style.display = 'none';
  }

}

==> app.component.html

<h2 appCustomStyle>Custom Heading</h2>
<p appCustomStyle>Custom Paragraph</p>

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

}


