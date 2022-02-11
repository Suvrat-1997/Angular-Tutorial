import { Component } from '@angular/core';


/*
                                  Routing Module in Angular

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
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  }
];

==> app-routing.module.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot(routes) remember
  exports: [RouterModule]
})

==> app.module.ts

import { AdminModule } from './admin/admin.module';

imports: [
    AdminModule
  ],

==> app.component.html

<ul>
    <li><a routerLink="student">Student</a></li>
    <li><a routerLink="teacher">Teacher</a></li>
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
  profile: any;

  constructor() {}

}


