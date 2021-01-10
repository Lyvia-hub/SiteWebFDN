import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicRoutingModule } from '../public/public-routing.module';
import { MainPageComponent } from '../public/home/main-page/main-page.component';
import { MainFdnPresentationComponent } from '../public/home/main-fdn-presentation/main-fdn-presentation.component';
import { MainSvodComponent } from '../public/home/main-svod/main-svod.component';
import { MainTeamComponent } from '../public/home/main-team/main-team.component';
import { MainContactComponent } from '../public/home/main-contact/main-contact.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
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
