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

@NgModule({
  declarations: [
    MainNetflixComponent,
    ArticleLupinComponent,
    ArticleSoaComponent,
    ArticleDramaComponent,
    ArticleTesComponent,
    ArticleTribulationsPhilComponent,
    ArticleSaqqarahComponent,
  ],
  imports: [
    CommonModule,
    SvodNetflixRoutingModule
  ]
})
export class SvodNetflixModule { }
