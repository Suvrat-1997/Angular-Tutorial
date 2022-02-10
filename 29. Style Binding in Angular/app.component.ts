import { Component } from '@angular/core';


/*
                            Style Binding in Angular

==> app.component.html

<h3 [style.color]="colr" [style.backgroundColor]="bg" [style.width]="'200px'" [style.height]="'200px'">Header 1</h3> <br>
<button type="button" (click)="updateColor()">Change Color</button>

==> app.component.ts

bg = 'skyblue';
colr = 'red';

  updateColor(){
    this.bg = 'green';
    this.colr = 'white';
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
  bg = 'skyblue';
  colr = 'red';

  updateColor(){
    this.bg = 'green';
    this.colr = 'white';
  }

}


