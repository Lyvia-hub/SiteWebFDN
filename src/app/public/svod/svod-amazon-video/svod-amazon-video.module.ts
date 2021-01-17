import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvodAmazonVideoRoutingModule } from './svod-amazon-video-routing.module';
import { MainAmazonVideoComponent } from './main-amazon-video/main-amazon-video.component';
import { ArticleThisIsUsComponent } from './article-this-is-us/article-this-is-us.component';
import { ArticleAnimalKingdomComponent } from './article-animal-kingdom/article-animal-kingdom.component';



@NgModule({
  declarations: [MainAmazonVideoComponent, ArticleThisIsUsComponent, ArticleAnimalKingdomComponent],
  imports: [
    CommonModule,
    SvodAmazonVideoRoutingModule

  ]
})
export class SvodAmazonVideoModule { }
