import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './home/main-page/main-page.component';
// import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { MainFdnPresentationComponent } from './home/main-fdn-presentation/main-fdn-presentation.component';
import { MainSvodComponent } from './home/main-svod/main-svod.component';
import { MainTeamComponent } from './home/main-team/main-team.component';
import { MainContactComponent } from './home/main-contact/main-contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'presentation-fdn',
    component: MainFdnPresentationComponent
  },
  {
    path: 'accueil-svod',
    component: MainSvodComponent
  },
  {
    path: 'team',
    component: MainTeamComponent
  },
  {
    path: 'contact',
    component: MainContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
