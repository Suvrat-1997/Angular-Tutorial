import { Component } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';


/*
                                  Lazy Loading Component in Angular

==> ng g c student-list
==> ng g c teacher-list


== app.component.ts

import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  async loadStudent() {
    this.vcr.clear();
    const { StudentListComponent } = await import('./student-list/student-list.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(StudentListComponent))
  }

  async loadTeacher() {
    this.vcr.clear();
    const { TeacherListComponent } = await import('./teacher-list/teacher-list.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(TeacherListComponent))
  }


==> app.component.html

<button type="button" (click)="loadStudent()">Load Student</button> <br><br>
<button type="button" (click)="loadTeacher()">Load Teacher</button>

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

  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  async loadStudent() {
    this.vcr.clear();
    const { StudentListComponent } = await import('./student-list/student-list.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(StudentListComponent));
  }

  async loadTeacher() {
    this.vcr.clear();
    const { TeacherListComponent } = await import('./teacher-list/teacher-list.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(TeacherListComponent));
  }

}


