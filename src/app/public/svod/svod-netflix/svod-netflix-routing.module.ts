import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNetflixComponent } from './main-netflix/main-netflix.component';
import { ArticleLupinComponent } from './article-lupin/article-lupin.component';
import { ArticleSoaComponent } from './article-soa/article-soa.component';
import { ArticleDramaComponent } from './article-drama/article-drama.component';

// const routes: Routes = [
//   {
//     path: 'svod-netflix',
//     component: MainNetflixComponent,
//     children: [
//       {
//         path: 'article-lupin',
//         component: ArticleLupinComponent
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: 'svod-netflix',
    component: MainNetflixComponent
  },
  {
    path: 'article-lupin',
    component: ArticleLupinComponent
  },
  {
    path: 'article-soa',
    component: ArticleSoaComponent
  },
  {
    path: 'article-drama',
    component: ArticleDramaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodNetflixRoutingModule { }
