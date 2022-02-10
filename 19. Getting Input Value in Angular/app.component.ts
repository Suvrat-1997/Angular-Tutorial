import { Component, OnInit } from '@angular/core';


/*
                                Getting Txtbox value in Angular


==> app.component.html

<h4>{{_val}}</h4>
<input type="text" (keyup)="getVal($event)"> <br><br>

==> app.component.ts

   _val: any;

  getVal(val: any) {
    this._val = val.target.value;
    console.warn(val.target.value);
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
  _val: any;

  ngOnInit(): void {
  }

  getVal(val: any) {
    this._val = val.target.value;
    console.warn(val.target.value);

  }

}


