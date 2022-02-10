import { Component } from '@angular/core';


/*
                            Style Binding in Angular

==> app.component.html

<h3 style="color: red;">Header 1</h3>
<h3 [style.color]="'green'">Header 2</h3>
<h3 [style.backgroundColor]="'pink'" [style.width]="'200px'">Header 3</h3>
<h3 [style.backgroundColor]="header4" [style.color]="'red'">Header 4</h3>

==> app.component.ts

header4 = 'skyblue';

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
  header4 = 'skyblue';

}


