import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosdosRoutingModule } from './preguntadosdos-routing.module';
import { PreguntadosdosComponent } from './preguntadosdos.component';


@NgModule({
  declarations: [
    PreguntadosdosComponent
  ],
  imports: [
    CommonModule,
    PreguntadosdosRoutingModule
  ]
})
export class PreguntadosdosModule { }
