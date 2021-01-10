import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './home/main-page/main-page.component';
import { MainFdnPresentationComponent } from './home/main-fdn-presentation/main-fdn-presentation.component';
import { MainSvodComponent } from './home/main-svod/main-svod.component';
import { MainTeamComponent } from './home/main-team/main-team.component';
import { MainContactComponent } from './home/main-contact/main-contact.component';

import { MainNetflixComponent } from './svod/svod-netflix/main-netflix/main-netflix.component';
import { ArticleLupinComponent } from './svod/svod-netflix/article-lupin/article-lupin.component';

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
  },
  {
    path: 'svod-netflix',
    component: MainNetflixComponent,
    children: [
      {
        path: 'article-lupin',
        component: ArticleLupinComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
