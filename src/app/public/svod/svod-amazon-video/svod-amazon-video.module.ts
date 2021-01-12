import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvodAmazonVideoRoutingModule } from './svod-amazon-video-routing.module';
import { MainAmazonVideoComponent } from './main-amazon-video/main-amazon-video.component';



@NgModule({
  declarations: [MainAmazonVideoComponent],
  imports: [
    CommonModule,
    SvodAmazonVideoRoutingModule

  ]
})
export class SvodAmazonVideoModule { }
