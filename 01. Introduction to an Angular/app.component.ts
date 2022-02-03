import { Component } from '@angular/core';


/*
                                      Angular

Angular is an application design framework and development platform for crating efficient and sophisticated single page apps.

Angular is a development platform, build on typescript which includes -----

      ==> A component based framework.
      ==> A collection of well-integrated libraries that cover a wide variety of features.
      ==> A suite of developer tools to help you develop, build, test and update your code.

It was developed by Google.
AngularJs is the first version of Angular.

Adding angular material

==> ng add @angular/material

==> Modules

Modules consist of one or more components. They donot control any HTML.
Angular apps will contain many modules, each dedicated to the single purpose

==> Components

Components control views(HTML). 
Each component can use other components, which are declared in the same module.
A component controls a patch of screen called a view. This approch keeps the code clean and separates the view from other parts.

Each component has 4 files:---

i) app.component.html (template/view file)
i) app.component.css/scss (style file)
i) app.component.ts (logic file)
i) app.component.spec.ts (testing file)

In Angular "App component" is a root component


Every Angular app has Global file: (index.html, style.css/scss)

Create Component Command

==> ng generate component user 
or 
==> ng g c user

CREATE src/app/user/user.component.html
CREATE src/app/user/user.component.spec.ts
CREATE src/app/user/user.component.ts
CREATE src/app/user/user.component.css 
UPDATE src/app/app.module.ts (update automatically)

==> app.module.ts

import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],

==> user.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user', // selector
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

==> app.component.html

<app-user></app-user>

==>index.html

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
  title = 'project';
}
