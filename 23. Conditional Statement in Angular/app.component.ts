import { Component, OnInit } from '@angular/core';


/*
                            Conditional Statement in Angular


==> app.component.html


<p *ngIf="show == 'yes'; then ifBlock else elseBlock"></p>
<ng-template #ifBlock>If Block</ng-template>
<ng-template #elseBlock>Else Block</ng-template>

==> app.component.ts

  show = 'yes';


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

  show = 'yes';

  ngOnInit(): void {
  }

}


