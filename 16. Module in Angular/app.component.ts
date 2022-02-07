import { Component } from '@angular/core';

/*

                                            Module in Angular

In Angular, a module is a mechanism to group components, directive, pipes and services that are related.

==> ng g m(module) users
==> ng g c users/login
==> ng g c users/signup

==> users.module.ts

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


  exports: [
    LoginComponent,
    SignupComponent
  ]

==> app.module.ts


import { UsersModule } from './users/users.module';

imports: [
    UsersModule
  ],

==> app.component.html

<app-login></app-login>
<app-signup></app-signup>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Me';

}
