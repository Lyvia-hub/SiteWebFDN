import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNetflixComponent } from './main-netflix/main-netflix.component';
import { ArticleLupinComponent } from './article-lupin/article-lupin.component';
import { SvodNetflixRoutingModule } from './svod-netflix-routing.module';

@NgModule({
  declarations: [
    MainNetflixComponent,
    ArticleLupinComponent],
  imports: [
    CommonModule,
    SvodNetflixRoutingModule
  ]
})
export class SvodNetflixModule { }
