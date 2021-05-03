import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleAnimalKingdomComponent } from './article-animal-kingdom/article-animal-kingdom.component';
import { ArticleCerclePoeteDisparuComponent } from './article-cercle-poete-disparu/article-cercle-poete-disparu.component';
import { ArticleClochetteComponent } from './article-clochette/article-clochette.component';
import { ArticleCocoComponent } from './article-coco/article-coco.component';
import { ArticleLaPlaneteAuTresorComponent } from './article-la-planete-au-tresor/article-la-planete-au-tresor.component';
import { ArticleMarvelProjectHerosComponent } from './article-marvel-project-heros/article-marvel-project-heros.component';
import { ArticleOmbreDeMaryComponent } from './article-ombre-de-mary/article-ombre-de-mary.component';
import { ArticleSectionStarComponent } from './article-section-star/article-section-star.component';
import { ArticleTheGreatestShowmanComponent } from './article-the-greatest-showman/article-the-greatest-showman.component';
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
  },
  {
    path: 'article-le_cercle_des_poetes_disparus',
    component: ArticleCerclePoeteDisparuComponent
  },
  {
    path: 'article-coco',
    component: ArticleCocoComponent
  },
  {
    path: 'article-the_greatest_showman',
    component: ArticleTheGreatestShowmanComponent
  },
  {
    path: 'article-clochette_et_la_creature_legendaire',
    component: ArticleClochetteComponent
  },
  {
    path: 'article-section_star',
    component: ArticleSectionStarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodDisneyPlusRoutingModule { }
