import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainFdnPresentationComponent } from './main-fdn-presentation/main-fdn-presentation.component';



@NgModule({
  declarations: [MainPageComponent, MainBannerComponent, MainFdnPresentationComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
