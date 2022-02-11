import { Component } from '@angular/core';


/*
                          404 page not found(Routing) in Angular

The "Wildcard Route" is basically used in Angular Application to handle the invalid URLs. 
Whenever the user enter some invalid URL or if you have deleted some existing URL from your application, 
then by default 404 page not found error page is displayed.

==> ng g c user
==> ng g c admin
==> ng g c page-not-found


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
  },

  // Wildcard Routing with **, It is define most bellow
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

==> page-not-found.component.html

<h1>404 Page Not Found!!</h1>

==> page-not-found.component.css

h1{
    color: red;
    margin-top: 50vh;
    margin-left: 40vw;
}
h1::before{
    content: '\00A4';
    margin-right: 20px;
}
h1::after{
    content: '\00A4';
    margin-left: 20px;
}


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


