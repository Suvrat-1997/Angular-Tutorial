import { Component } from '@angular/core';

// Interface
interface customer {
  name: string,
  id: number,
  isIndian: boolean,
  address: any
}


/*
                                  Interface in Angular

Interface is used to define data structure.


==> app.component.ts

// Interface
interface customer {
  name: string,
  id: number,
  isIndian: boolean,
  address: any
}

profile: any;

  constructor() {
    const dataList: customer = {
      name: 'Anil',
      id: 101,
      isIndian: true,
      address: 'Noida, Delhi, 700125148'

      // Error

      // id: '101',
      // isIndian: "Yes",
      // address: true
    }
    this.profile = dataList;
  }

==> app.component.html

<h3>Id: {{profile.id}}</h3>
<h3>Name: {{profile.name}}</h3>
<h3>Is Indian?:
    <span *ngIf="profile.isIndian === true">Yes</span>
    <span *ngIf="profile.isIndian === false">No</span>
</h3>
<h3>Address: {{profile.address}}</h3>

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
  profile: any;

  constructor() {
    const dataList: customer = {
      name: 'Anil',
      id: 101,
      isIndian: true,
      address: 'Noida, Delhi, 700125148'
      // Error

      // id: '101',
      // isIndian: "Yes",
      // address: true
    }
    this.profile = dataList;
  }

}


