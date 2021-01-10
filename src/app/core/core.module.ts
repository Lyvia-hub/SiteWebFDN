import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicModule } from '../public/public.module';
import { PublicRoutingModule } from '../public/public-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    PublicRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Ensure that coreModule is instanciated once in AppModule
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
