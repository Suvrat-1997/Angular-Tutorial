import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy Loading
const routes: Routes = [
  {
    path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
