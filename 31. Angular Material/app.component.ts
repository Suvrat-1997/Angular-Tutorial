import { Component } from '@angular/core';


/*
                            Material in Angular

==> ng add @angular/material

==> app.module.ts

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // automatically update

imports: [
    MatButtonModule,
    BrowserAnimationsModule
  ],

==> angular.json

"styles": [
              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css", // automatically update
              "src/styles.css"
            ],

==> app.component.html

<button mat-raised-button>Basic</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>

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
  colr = true;
  // colr = false;

}


