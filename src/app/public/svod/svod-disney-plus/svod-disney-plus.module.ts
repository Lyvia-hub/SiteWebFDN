import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDisneyPlusComponent } from './main-disney-plus/main-disney-plus.component';
import { SvodDisneyPlusRoutingModule } from './svod-disney-plus-routing.module';
import { ArticleOmbreDeMaryComponent } from './article-ombre-de-mary/article-ombre-de-mary.component';
import { ArticleMarvelProjectHerosComponent } from './article-marvel-project-heros/article-marvel-project-heros.component';
import { ArticleLaPlaneteAuTresorComponent } from './article-la-planete-au-tresor/article-la-planete-au-tresor.component';
import { ArticleAnimalKingdomComponent } from './article-animal-kingdom/article-animal-kingdom.component';



@NgModule({
  declarations: [MainDisneyPlusComponent, ArticleOmbreDeMaryComponent, ArticleMarvelProjectHerosComponent, ArticleLaPlaneteAuTresorComponent, ArticleAnimalKingdomComponent],
  imports: [
    CommonModule,
    SvodDisneyPlusRoutingModule
  ]
})
export class SvodDisneyPlusModule { }
