import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainFdnPresentationComponent } from './main-fdn-presentation/main-fdn-presentation.component';
import { MainSvodComponent } from './main-svod/main-svod.component';
import { MainTeamComponent } from './main-team/main-team.component';



@NgModule({
  declarations: [
    MainPageComponent,
    MainBannerComponent,
    MainFdnPresentationComponent,
    MainSvodComponent,
    MainTeamComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
