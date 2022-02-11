import { Component } from '@angular/core';


/*
                                  Lazy Loading in Angular

Lazy loading is apply in routing.

Normal Loading: 

All routing are load when first loading the app. 
Normal loading is very slow, to speed up loading to used lazy loading.

In lazy loading donot need to import the "AdminModule" into the "app.module.ts" file 


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

// Lazy Loading
const routes: Routes = [
  {
    path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(mod => mod.AdminModule)

    // here mod means module
  }
];

==> app.component.html

<ul>
    <li><a routerLink="admin/student">Student</a></li>
    <li><a routerLink="admin/teacher">Teacher</a></li>
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


