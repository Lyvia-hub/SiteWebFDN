import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleBigLittleLiarsComponent } from './article-big-little-liars/article-big-little-liars.component';
import { ArticleChernobylComponent } from './article-chernobyl/article-chernobyl.component';
import { ArticleGotComponent } from './article-got/article-got.component';

import { MainOcsComponent } from './main-ocs/main-ocs.component';

const routes: Routes = [
  {
    path: 'svod-ocs',
    component: MainOcsComponent
  },
  {
    path: 'article-chernobyl',
    component: ArticleChernobylComponent
  },
  {
    path: 'article-game-of-thrones',
    component: ArticleGotComponent
  },
  {
    path: 'article-big-little-lies',
    component: ArticleBigLittleLiarsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodOcsRoutingModule { }
