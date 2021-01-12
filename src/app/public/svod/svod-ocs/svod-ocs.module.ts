import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOcsComponent } from './main-ocs/main-ocs.component';
import { SvodOcsRoutingModule } from './svod-ocs-routing.module';



@NgModule({
  declarations: [MainOcsComponent],
  imports: [
    CommonModule,
    SvodOcsRoutingModule
  ]
})
export class SvodOcsModule { }
