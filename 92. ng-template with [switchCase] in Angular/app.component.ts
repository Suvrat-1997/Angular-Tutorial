import { Component } from '@angular/core';

/*

                          ng Template with [switchCase] in Angular


==> app.component.html

<div [ngSwitch]="'developer'">
        <p *ngSwitchCase="'developer'">Developer Found</p>
        <p *ngSwitchCase="'seo'">SEO Found</p>
        <p *ngSwitchCase="'designer'">Designer Found</p>
    </div>

    <h2>ng-template with Switch Case</h2>

    <div [ngSwitch]="'designer'">
        <ng-template [ngSwitchCase]="'developer'">
            <p>Developer Found</p>
        </ng-template>
        <ng-template [ngSwitchCase]="'seo'">
            <p>SEO Found</p>
        </ng-template>
        <ng-template [ngSwitchCase]="'designer'">
            <p>Designer Found</p>
        </ng-template>
    </div>


*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() { }

}
