import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleAnimalKingdomComponent } from './article-animal-kingdom/article-animal-kingdom.component';
import { ArticleLaPlaneteAuTresorComponent } from './article-la-planete-au-tresor/article-la-planete-au-tresor.component';
import { ArticleMarvelProjectHerosComponent } from './article-marvel-project-heros/article-marvel-project-heros.component';
import { ArticleOmbreDeMaryComponent } from './article-ombre-de-mary/article-ombre-de-mary.component';
import { MainDisneyPlusComponent } from './main-disney-plus/main-disney-plus.component';

const routes: Routes = [
  {
    path: 'svod-disney-plus',
    component: MainDisneyPlusComponent
  },
  {
    path: 'article-disney-animal-kingdom',
    component: ArticleAnimalKingdomComponent
  },
  {
    path: 'article-la-planete-au-tresor',
    component: ArticleLaPlaneteAuTresorComponent
  },
  {
    path: 'article-dans-l-ombre-de-mary',
    component: ArticleOmbreDeMaryComponent
  },
  {
    path: 'article-marvel-project-heros',
    component: ArticleMarvelProjectHerosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodDisneyPlusRoutingModule { }
