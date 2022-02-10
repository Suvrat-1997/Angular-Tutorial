import { Component } from '@angular/core';


/*
                            [ngStyle] in Angular

==> app.component.html


<button type="button" [ngStyle]="{'color': '#fff', 'background-color': bgColor['used']}" (click)="changedColor('used')">Used Key</button> &nbsp; &nbsp;
<button type="button" [ngStyle]="{'color': '#fff', 'background-color': bgColor['active_used']}" (click)="changedColor('active_used')">Active Used Key</button> &nbsp; &nbsp;
<button type="button" [ngStyle]="{'color': '#fff', 'background-color': bgColor['all']}" (click)="changedColor('all')">All Key</button> &nbsp; &nbsp;
<button type="button" [ngStyle]="{'color': '#fff', 'background-color': bgColor['unused']}" (click)="changedColor('unused')">Unused Key</button> &nbsp; &nbsp;


==> app.component.ts

  bgColor: any = {
    used: '#4169E1',
    active_used: '#4169E1',
    all: '#4169E1',
    unused: '#4169E1'
  };

  changedColor(_type: string){
    this.bgColor = {
      used: '#4169E1',
      active_used: '#4169E1',
      all: '#4169E1',
      unused: '#4169E1'
    };
    this.bgColor[_type] = '#FA8072';
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

  bgColor: any = {
    used: '#4169E1',
    active_used: '#4169E1',
    all: '#4169E1',
    unused: '#4169E1'
  };

  changedColor(_type: string){
    this.bgColor = {
      used: '#4169E1',
      active_used: '#4169E1',
      all: '#4169E1',
      unused: '#4169E1'
    };
    this.bgColor[_type] = '#FA8072';
  }

}


