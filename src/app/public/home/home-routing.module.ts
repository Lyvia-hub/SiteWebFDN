import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNetflixComponent } from '../svod/svod-netflix/main-netflix/main-netflix.component';

const routes: Routes = [
  {
    path: 'svod-netflix',
    component: MainNetflixComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
