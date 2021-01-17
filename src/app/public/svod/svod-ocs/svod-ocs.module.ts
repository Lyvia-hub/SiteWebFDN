import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOcsComponent } from './main-ocs/main-ocs.component';
import { SvodOcsRoutingModule } from './svod-ocs-routing.module';
import { ArticleChernobylComponent } from './article-chernobyl/article-chernobyl.component';
import { ArticleGotComponent } from './article-got/article-got.component';
import { ArticleBigLittleLiarsComponent } from './article-big-little-liars/article-big-little-liars.component';



@NgModule({
  declarations: [MainOcsComponent, ArticleChernobylComponent, ArticleGotComponent, ArticleBigLittleLiarsComponent],
  imports: [
    CommonModule,
    SvodOcsRoutingModule
  ]
})
export class SvodOcsModule { }
