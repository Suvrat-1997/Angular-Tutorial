import { Component } from '@angular/core';


/*
                                styles instead of styleUrls in Angular
==> app.component.html

<div>
    <h1>template instead of templateUrl in Angular</h1>
</div>

==> app.component.ts

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  
  // styleUrls: ['./app.component.css']

  styles: [`
  div{
    color: red;
  }`]

})

==> index.html

<body>
  <app-root></app-root>
</body>



*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']

  styles: [`
  div{
    color: red;
  }`]
  
})
export class AppComponent {
  title = 'project';
}
