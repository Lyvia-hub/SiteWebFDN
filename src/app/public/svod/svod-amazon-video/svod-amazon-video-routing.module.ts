import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleAnimalKingdomComponent } from './article-animal-kingdom/article-animal-kingdom.component';
import { ArticleThisIsUsComponent } from './article-this-is-us/article-this-is-us.component';

import { MainAmazonVideoComponent } from './main-amazon-video/main-amazon-video.component';

const routes: Routes = [
  {
    path: 'svod-amazon-video',
    component: MainAmazonVideoComponent
  },
  {
    path: 'article-animal-kingdom',
    component: ArticleAnimalKingdomComponent
  },
  {
    path: 'article-this-is-us',
    component: ArticleThisIsUsComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodAmazonVideoRoutingModule { }
