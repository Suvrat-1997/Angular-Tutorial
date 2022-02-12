import { Component } from '@angular/core';

/*

                          Router with Parameter in Angular

==> pass in url

localhost:4200/profile/Ram/id=101

The Angular router has support for dynamic paths and provides an easy to use API to access router parameters.

==> ng g c user
==> ng g c admin

==> app-routing.module.ts

import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user/:username',
    component: UserComponent
  },
  {
    path: 'admin/:name/:id',
    component: AdminComponent
  }
];


==> user.component.ts

import { ActivatedRoute } from '@angular/router';

name = '';

  constructor(private _router: ActivatedRoute) {
    this._router.params.subscribe(params => {
      this.name = params['username']
    })
  }

==> user.component.html

<h3> {{name}} </h3>

==> admin.component.ts

import { ActivatedRoute } from '@angular/router';

name = '';
id?:number;

 constructor(private _router: ActivatedRoute) { 
    this._router.params.subscribe(params=>{
      this.name = params['name'];
      this.id = params['id'];
    })
  }

==> admin.component.html

<h3>{{name}}</h3>
<h3>{{id}}</h3>

==> app.component.html

<nav>
  <ul>
    <li> <a routerLink="user">User</a></li>
    <li> <a routerLink="admin">Admin</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(){  }


}
