import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name = '';
  id?:number;

  constructor(private _router: ActivatedRoute) { 
    this._router.params.subscribe(params=>{
      this.name = params['name'];
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
  }

}
