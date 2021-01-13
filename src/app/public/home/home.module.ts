import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainFdnPresentationComponent } from './main-fdn-presentation/main-fdn-presentation.component';
import { MainSvodComponent } from './main-svod/main-svod.component';
import { MainTeamComponent } from './main-team/main-team.component';
import { MainContactComponent } from './main-contact/main-contact.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    MainPageComponent,
    MainBannerComponent,
    MainFdnPresentationComponent,
    MainSvodComponent,
    MainTeamComponent,
    MainContactComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
