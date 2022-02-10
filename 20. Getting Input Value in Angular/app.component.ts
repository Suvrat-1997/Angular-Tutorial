import { Component, OnInit } from '@angular/core';


/*
                                Getting Textbox value in Angular


==> app.component.html

<h4>{{_val}}</h4>
<input #box type="text">
<button (click)="getVal(box.value)">Get Value</button>

==> app.component.ts

   _val: any;

  getVal(val: any) {
    this._val = val;
    console.warn(val);
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
    this._val = val;
    console.warn(val);
  }

}


