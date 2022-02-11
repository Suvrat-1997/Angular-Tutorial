import { Component } from '@angular/core';
import { UserDataService } from './service/user-data.service';


/*
                          Service in Angular

Service are most used to data share between one or more component.

Service are not depend on module or component.


==> ng g s(service) service/user-data

CREATE src/app/service/user-data.service.spec.ts
CREATE src/app/service/user-data.service.ts

==> user-data.service.ts

getData(){
    return {
      id: 101,
      name: 'Anil',
      age: 30,
      addr: 'Noida'
    }
  }

==> app.component.ts

import { UserDataService } from './service/user-data.service';

profile!: any;

  constructor(private _service: UserDataService) {
    console.warn(this._service.getData());
    this.profile = this._service.getData();
  }

==> app.component.html

<h3>Id: {{profile.id}}</h3>
<h3>Name: {{profile.name}}</h3>
<h3>Age: {{profile.age}}</h3>
<h3>Address: {{profile.addr}}</h3>

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

  profile!: any;

  constructor(private _service: UserDataService) {
    console.warn(this._service.getData());
    this.profile = this._service.getData();
  }

}


