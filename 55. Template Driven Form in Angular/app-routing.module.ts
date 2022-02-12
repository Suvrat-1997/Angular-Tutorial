import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy Loading
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
