import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNetflixComponent } from './main-netflix/main-netflix.component';
import { ArticleLupinComponent } from './article-lupin/article-lupin.component';
import { SvodNetflixRoutingModule } from './svod-netflix-routing.module';
import { ArticleSoaComponent } from './article-soa/article-soa.component';
import { ArticleDramaComponent } from './article-drama/article-drama.component';
import { ArticleTesComponent } from './article-tes/article-tes.component';
import { ArticleTribulationsPhilComponent } from './article-tribulations-phil/article-tribulations-phil.component';
import { ArticleSaqqarahComponent } from './article-saqqarah/article-saqqarah.component';
import { ArticleVictoriaEtAbdulComponent } from './article-victoria-et-abdul/article-victoria-et-abdul.component';
import { FamilyBusinessComponent } from './family-business/family-business.component';
import { ArticleTheCrownComponent } from './article-the-crown/article-the-crown.component';
import { ArticleTheEmpressKiComponent } from './article-the-empress-ki/article-the-empress-ki.component';
import { ArticleThirteenReasonsWhyComponent } from './article-thirteen-reasons-why/article-thirteen-reasons-why.component';
import { ArticleJeVeuxMangerTonPancreasComponent } from './article-je-veux-manger-ton-pancreas/article-je-veux-manger-ton-pancreas.component';
import { ArticleYourLieInAprilComponent } from './article-your-lie-in-april/article-your-lie-in-april.component';
import { ArticleBronxComponent } from './article-bronx/article-bronx.component';
import { ArticleDearWhitePeopleComponent } from './article-dear-white-people/article-dear-white-people.component';
import { ArticleDraculaComponent } from './article-dracula/article-dracula.component';
import { ArticleDetroitComponent } from './article-detroit/article-detroit.component';
import { ArticleLaConvocationComponent } from './article-la-convocation/article-la-convocation.component';
import { ArticleAfterLifeComponent } from './article-after-life/article-after-life.component';

@NgModule({
  declarations: [
    MainNetflixComponent,
    ArticleLupinComponent,
    ArticleSoaComponent,
    ArticleDramaComponent,
    ArticleTesComponent,
    ArticleTribulationsPhilComponent,
    ArticleSaqqarahComponent,
    ArticleVictoriaEtAbdulComponent,
    FamilyBusinessComponent,
    ArticleTheCrownComponent,
    ArticleTheEmpressKiComponent,
    ArticleThirteenReasonsWhyComponent,
    ArticleJeVeuxMangerTonPancreasComponent,
    ArticleYourLieInAprilComponent,
    ArticleBronxComponent,
    ArticleDearWhitePeopleComponent,
    ArticleDraculaComponent,
    ArticleDetroitComponent,
    ArticleLaConvocationComponent,
    ArticleAfterLifeComponent,
  ],
  imports: [
    CommonModule,
    SvodNetflixRoutingModule
  ]
})
export class SvodNetflixModule { }
