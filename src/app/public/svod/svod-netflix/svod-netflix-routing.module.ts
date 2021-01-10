import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNetflixComponent } from './main-netflix/main-netflix.component';
import { ArticleLupinComponent } from './article-lupin/article-lupin.component';

const routes: Routes = [
  {
    path: 'svod-netflix',
    component: MainNetflixComponent,
    children: [
      {
        path: 'article-lupin',
        component: ArticleLupinComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodNetflixRoutingModule { }
