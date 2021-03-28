import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNetflixComponent } from './main-netflix/main-netflix.component';
import { ArticleLupinComponent } from './article-lupin/article-lupin.component';
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
  {
    path: 'article-tous-en-scene',
    component: ArticleTesComponent
  },
  {
    path: 'article-les-tribulations-culinaires-de-phil',
    component: ArticleTribulationsPhilComponent
  },
  {
    path: 'article-les-secrets-de-la-tombe-de-saqqarah',
    component: ArticleSaqqarahComponent
  },
  {
    path: 'article-victoria-et-abdul',
    component: ArticleVictoriaEtAbdulComponent
  },
  {
    path: 'article-family_business',
    component: FamilyBusinessComponent
  },
  {
    path: 'article-the_crown',
    component: ArticleTheCrownComponent
  },
  {
    path: 'article-the_empress_ki',
    component: ArticleTheEmpressKiComponent
  },
  {
    path: 'article-thirteen_reasons_why',
    component: ArticleThirteenReasonsWhyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvodNetflixRoutingModule { }
