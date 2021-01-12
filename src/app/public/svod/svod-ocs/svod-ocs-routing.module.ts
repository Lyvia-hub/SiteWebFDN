import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainOcsComponent } from './main-ocs/main-ocs.component';

const routes: Routes = [
  {
    path: 'svod-ocs',
    component: MainOcsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodOcsRoutingModule { }
