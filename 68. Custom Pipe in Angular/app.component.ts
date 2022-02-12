import { Component } from '@angular/core';

/*

                                      Custom Pipe in Angular

==> ng g pipe pipe/cutom-pipe

CREATE src/app/pipe/cutom-pipe.pipe.spec.ts
CREATE src/app/pipe/cutom-pipe.pipe.ts
UPDATE src/app/app.module.ts

==> custom-pipe.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutomPipe'
})
export class CutomPipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender === 'Male'){
      return "Mr. "+value;
    } else {
      return "Miss. "+value;
    }
  }

}
  
==> app.component.html

<table border="1">
  <thead>
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let emp of employee; let i=index;">
      <td>{{i+1}}</td>
      <td>{{emp.name | cutomPipe: emp.gender}}</td>
      <td>{{emp.age}}</td>
    </tr>
  </tbody>
</table>

==> app.component.ts

employee = [
    {
      name: 'Rahul',
      gender: 'Male',
      age: 23
    },
    {
      name: 'Priya',
      gender: 'Female',
      age: 20
    },
    {
      name: 'Sumit',
      gender: 'Male',
      age: 19
    },
    {
      name: 'Susmita',
      gender: 'Female',
      age: 25
    }
  ];



*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  employee = [
    {
      name: 'Rahul',
      gender: 'Male',
      age: 23
    },
    {
      name: 'Priya',
      gender: 'Female',
      age: 20
    },
    {
      name: 'Sumit',
      gender: 'Male',
      age: 19
    },
    {
      name: 'Susmita',
      gender: 'Female',
      age: 25
    }
  ];

}
