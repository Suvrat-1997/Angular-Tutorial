import { Component } from '@angular/core';


/*
                                template instead of templateUrl in Angular

==> app.component.ts

@Component({

  selector: 'app-root',

  // templateUrl: './app.component.html',

  template: `<div>
    <h1>template instead of templateUrl in Angular</h1>
  </div>`,
  
  styleUrls: ['./app.component.css']
})

==> index.html

<body>
  <app-root></app-root>
</body>



*/

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<div>
    <h1>template instead of templateUrl in Angular</h1>
  </div>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
