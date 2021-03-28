import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDisneyPlusComponent } from './main-disney-plus/main-disney-plus.component';
import { SvodDisneyPlusRoutingModule } from './svod-disney-plus-routing.module';
import { ArticleOmbreDeMaryComponent } from './article-ombre-de-mary/article-ombre-de-mary.component';
import { ArticleMarvelProjectHerosComponent } from './article-marvel-project-heros/article-marvel-project-heros.component';
import { ArticleLaPlaneteAuTresorComponent } from './article-la-planete-au-tresor/article-la-planete-au-tresor.component';
import { ArticleAnimalKingdomComponent } from './article-animal-kingdom/article-animal-kingdom.component';
import { ArticleCerclePoeteDisparuComponent } from './article-cercle-poete-disparu/article-cercle-poete-disparu.component';
import { ArticleCocoComponent } from './article-coco/article-coco.component';
import { ArticleTheGreatestShowmanComponent } from './article-the-greatest-showman/article-the-greatest-showman.component';



@NgModule({
  declarations: [MainDisneyPlusComponent, ArticleOmbreDeMaryComponent, ArticleMarvelProjectHerosComponent, ArticleLaPlaneteAuTresorComponent, ArticleAnimalKingdomComponent, ArticleCerclePoeteDisparuComponent, ArticleCocoComponent, ArticleTheGreatestShowmanComponent],
  imports: [
    CommonModule,
    SvodDisneyPlusRoutingModule
  ]
})
export class SvodDisneyPlusModule { }
