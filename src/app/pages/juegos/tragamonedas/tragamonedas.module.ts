import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TragamonedasRoutingModule } from './tragamonedas-routing.module';
import { TragamonedasComponent } from './tragamonedas.component';


@NgModule({
  declarations: [
    TragamonedasComponent
  ],
  imports: [
    CommonModule,
    TragamonedasRoutingModule
  ]
})
export class TragamonedasModule { }
