import { Component } from '@angular/core';

/*

                              Redirecting the Router to Anoter Router in Angular

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

==> admin-routing.module.ts

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

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
      },
      {
        path: 'customer', redirectTo: 'student', pathMatch: 'full'
      },
      {
        path: 'user', redirectTo: 'teacher', pathMatch: 'full'
      }
    ]
  }
];

==> app.module.ts

import { AdminModule } from './admin/admin.module';

  imports: [
    AdminModule
  ],

  
==> app.component.html


<nav>
  <ul>
    <li> <a routerLink="admin/student">Student</a></li>
    <li> <a routerLink="admin/teacher">Teacher</a></li>
    <li> <a routerLink="admin/customer">Customer</a></li>
    <li> <a routerLink="admin/user">User</a></li>
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

}
