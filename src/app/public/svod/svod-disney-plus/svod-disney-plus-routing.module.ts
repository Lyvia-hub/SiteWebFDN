import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisneyPlusComponent } from './main-disney-plus/main-disney-plus.component';

const routes: Routes = [
  {
    path: 'svod-disney-plus',
    component: MainDisneyPlusComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodDisneyPlusRoutingModule { }
