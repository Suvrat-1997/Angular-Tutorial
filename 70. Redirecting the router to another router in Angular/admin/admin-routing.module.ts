import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
