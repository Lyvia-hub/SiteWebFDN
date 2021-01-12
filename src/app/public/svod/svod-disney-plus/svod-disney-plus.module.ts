import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDisneyPlusComponent } from './main-disney-plus/main-disney-plus.component';
import { SvodDisneyPlusRoutingModule } from './svod-disney-plus-routing.module';



@NgModule({
  declarations: [MainDisneyPlusComponent],
  imports: [
    CommonModule,
    SvodDisneyPlusRoutingModule
  ]
})
export class SvodDisneyPlusModule { }
