import { Component } from '@angular/core';


/*
                          Routing in Angular

==> ng g c user
==> ng g c admin


==> app-routing.module.ts

import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

// Array of Object
const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];


==> app.component.html

<ul>

<!-- 
    <li><a href="/user">User</a></li>
    <li><a href="/admin">Admin</a></li> 
-->

    <li><a routerLink="/user">User</a></li>
    <li><a routerLink="/admin">Admin</a></li>
</ul>

<router-outlet></router-outlet>


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

}


