import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvodNetflixModule } from './svod-netflix/svod-netflix.module';
import { SvodOcsModule } from './svod-ocs/svod-ocs.module';
import { SvodDisneyPlusModule } from './svod-disney-plus/svod-disney-plus.module';
import { SvodAmazonVideoModule } from './svod-amazon-video/svod-amazon-video.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SvodNetflixModule,
    SvodOcsModule,
    SvodDisneyPlusModule,
    SvodAmazonVideoModule
  ]
})
export class SvodModule { }
