import { Component } from '@angular/core';


/*
                                  Group Routing in Angular

==> ng g m admin --routing

CREATE src/app/admin/admin-routing.module.ts
CREATE src/app/admin/admin.module.ts

==> ng g c admin/student

CREATE src/app/admin/student/student.component.html
CREATE src/app/admin/student/student.component.spec.ts
CREATE src/app/admin/student/student.component.ts
CREATE src/app/admin/student/student.component.css
UPDATE src/app/admin/admin.module.ts

==> ng g c admin/teacher

CREATE src/app/admin/teacher/teacher.component.html
CREATE src/app/admin/teacher/teacher.component.spec.ts
CREATE src/app/admin/teacher/teacher.component.ts
CREATE src/app/admin/teacher/teacher.component.css
UPDATE src/app/admin/admin.module.ts

==> admin-routing.module.ts

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  imports: [RouterModule.forChild(routes)], // forChild(routes) remember
  exports: [RouterModule]
})

// Array of object
const routes: Routes = [
  {
    path: 'admin', children: [
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent
      }
    ]
  }
];

==> ng g m user --routing

CREATE src/app/user/user-routing.module.ts (247 bytes)
CREATE src/app/user/user.module.ts (272 bytes)

==> ng g c user/login

CREATE src/app/user/login/login.component.html
CREATE src/app/user/login/login.component.spec.ts
CREATE src/app/user/login/login.component.ts
CREATE src/app/user/login/login.component.css
UPDATE src/app/user/user.module.ts

==> ng g c user/signup

CREATE src/app/user/signup/signup.component.html
CREATE src/app/user/signup/signup.component.spec.ts
CREATE src/app/user/signup/signup.component.ts
CREATE src/app/user/signup/signup.component.css
UPDATE src/app/user/user.module.ts

==> user-routing.module.ts

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'user', children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // forChild(routes) remember
  exports: [RouterModule]
})

==> app-routing.module.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot(routes) remember
  exports: [RouterModule]
})

==> app.module.ts

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

  imports: [
    AdminModule,
    UserModule
  ],

==> app.component.html

<ul>
    <li><a routerLink="admin/student">Student</a></li>
    <li><a routerLink="admin/teacher">Teacher</a></li>
    <li><a routerLink="user/login">Login</a></li>
    <li><a routerLink="user/signup">Signup</a></li>
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

  constructor() {}

}


