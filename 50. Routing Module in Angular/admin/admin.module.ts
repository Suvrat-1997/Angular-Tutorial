import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';


@NgModule({
  declarations: [
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
