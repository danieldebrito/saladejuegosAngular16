import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntadosdosComponent } from './preguntadosdos.component';

const routes: Routes = [{ path: '', component: PreguntadosdosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntadosdosRoutingModule { }
