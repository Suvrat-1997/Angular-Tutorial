import { Component, OnInit } from '@angular/core';


/*
                            Conditional Statement in Angular


==> app.component.html


<ng-template [ngIf]="name == 'ram'">Ram's House</ng-template>
<ng-template [ngIf]="name == 'rahul'">Rahul's House</ng-template>
<ng-template [ngIf]="name == 'soumya'">Soumya's House</ng-template>

==> app.component.ts

  name = 'ram';


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

  name = 'ram';

  ngOnInit(): void {
  }

}


