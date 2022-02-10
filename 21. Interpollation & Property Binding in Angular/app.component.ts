import { Component, OnInit } from '@angular/core';


/*
                            Interpollation & Property Binding in Angular


==> app.component.html


<input type="text" [disabled]="isDsbl" value="Sumitra Dixit">
<input type="text" value="{{fname}}">
<input type="text" [value]="lname"> 

==> app.component.ts

  isDsbl:boolean = true;
  fname = 'Akash';
  lname = 'Maity';

  enableBox() {
    this.isDsbl = false;
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
  isDsbl: boolean = true;
  fname = 'Akash';
  lname = 'Maity';

  ngOnInit(): void {
  }

  enableBox() {
    this.isDsbl = false;
  }

}


