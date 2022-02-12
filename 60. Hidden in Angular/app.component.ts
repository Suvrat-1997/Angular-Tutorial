import { Component } from '@angular/core';

/*

                                      [hidden] in Angular




==> app.component.ts

isShow = true;

==> app.component.html

<ng-template [ngIf]="isShow" [ngIfElse]="logout">
  <h2>Logged User</h2>
</ng-template>
<ng-template #logout>
  <h2>New User</h2>
</ng-template>

<div [hidden]="isShow">
  <h2>Logged User</h2>
</div>
<div [hidden]="!isShow">
  <h2>New User</h2>
</div>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  isShow = true;
  constructor() { }



}
