import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNetflixComponent } from './main-netflix/main-netflix.component';
import { ArticleLupinComponent } from './article-lupin/article-lupin.component';
import { SvodNetflixRoutingModule } from './svod-netflix-routing.module';
import { ArticleSoaComponent } from './article-soa/article-soa.component';
import { ArticleDramaComponent } from './article-drama/article-drama.component';

@NgModule({
  declarations: [
    MainNetflixComponent,
    ArticleLupinComponent,
    ArticleSoaComponent,
    ArticleDramaComponent,
  ],
  imports: [
    CommonModule,
    SvodNetflixRoutingModule
  ]
})
export class SvodNetflixModule { }
