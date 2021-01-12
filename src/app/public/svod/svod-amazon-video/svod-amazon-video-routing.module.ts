import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainAmazonVideoComponent } from './main-amazon-video/main-amazon-video.component';

const routes: Routes = [
  {
    path: 'svod-amazon-video',
    component: MainAmazonVideoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodAmazonVideoRoutingModule { }
