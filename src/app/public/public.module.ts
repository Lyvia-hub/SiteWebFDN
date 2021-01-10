import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { SvodModule } from './svod/svod.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    SvodModule
  ]
})
export class PublicModule { }
