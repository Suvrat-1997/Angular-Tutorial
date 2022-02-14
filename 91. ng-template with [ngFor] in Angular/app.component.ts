import { Component } from '@angular/core';

/*

                          ng Template in Angular

==> app.component.ts


degree = ['BCA', 'MCA', 'MBA', 'BBA', 'PHD', 'B.TECH'];


==> app.component.html

<div style="text-align: center;">
    <h1>ng Template in Angular</h1>

    <div *ngFor="let deg of degree; let i=index;">
        {{i+1}}. {{deg}}
    </div>

    <h2>ng-template for loop content</h2>
    <ng-template [ngFor] let-degr [ngForOf]="degree" let-j="index">
        <p>{{j+1}}. {{degr}}</p>
    </ng-template>
</div>


*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  degree = ['BCA', 'MCA', 'MBA', 'BBA', 'PHD', 'B.TECH'];
  constructor() { }

}
