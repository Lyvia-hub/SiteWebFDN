import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicRoutingModule } from '../public/public-routing.module';
import { MainPageComponent } from '../public/home/main-page/main-page.component';
import { MainFdnPresentationComponent } from '../public/home/main-fdn-presentation/main-fdn-presentation.component';
import { MainSvodComponent } from '../public/home/main-svod/main-svod.component';
import { MainTeamComponent } from '../public/home/main-team/main-team.component';
import { MainContactComponent } from '../public/home/main-contact/main-contact.component';

import { MainNetflixComponent } from '../public/svod/svod-netflix/main-netflix/main-netflix.component';
import { MainOcsComponent } from '../public/svod/svod-ocs/main-ocs/main-ocs.component';
import { MainDisneyPlusComponent } from '../public/svod/svod-disney-plus/main-disney-plus/main-disney-plus.component';
import { MainAmazonVideoComponent } from '../public/svod/svod-amazon-video/main-amazon-video/main-amazon-video.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
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
      },
      {
        path: 'svod-netflix',
        component: MainNetflixComponent
      },
      {
        path: 'svod-ocs',
        component: MainOcsComponent
      },
      {
        path: 'svod-disney-plus',
        component: MainDisneyPlusComponent
      },
      {
        path: 'svod-amazon-video',
        component: MainAmazonVideoComponent
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports:
    [
      [RouterModule.forChild(routes)],
      CommonModule,
      PublicRoutingModule
    ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
