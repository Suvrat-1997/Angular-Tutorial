import { Component, OnInit } from '@angular/core';


/*
                            *ngSwitch in Angular


==> app.component.html


<div [ngSwitch]="color">
    <h2 *ngSwitchCase="'red'" style="color: red;">Red Color</h2>
    <h2 *ngSwitchCase="'green'" style="color: green;">Green Color</h2>
    <h2 *ngSwitchCase="'yellow'" style="color: yellow;">Yellow Color</h2>
    <h2 *ngSwitchCase="'pink'" style="color: pink;">Pink Color</h2>
</div>

==> app.component.ts

  color = 'green';

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

  color = 'green';

  ngOnInit(): void {
  }

}


