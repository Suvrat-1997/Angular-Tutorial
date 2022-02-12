import { Component } from '@angular/core';
import { Router } from '@angular/router';

/*

                          Redirecting the Router to Anoter Router using Button Click in Angular

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
==> ng g c admin/customer

==> admin-routing.module.ts

import { CustomerComponent } from './customer/customer.component';
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
        path: 'customer',
        component: CustomerComponent
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
  </ul>
</nav>
<button (click)="goTo()">Go to Another Page</button>
<router-outlet></router-outlet>

==> app.component.ts

import { Router } from '@angular/router';

constructor(private _router: Router){}

  goTo(){
    this._router.navigate(['/admin/customer']);
    // this._router.navigateByUrl('/admin/customer');
  }

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private _router: Router){}

  goTo(){
    this._router.navigate(['/admin/customer']);
    // this._router.navigateByUrl('/admin/customer');
  }

}
