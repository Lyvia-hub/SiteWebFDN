import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MainBannerComponent } from './main-banner/main-banner.component';



@NgModule({
  declarations: [MainPageComponent, MainBannerComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
