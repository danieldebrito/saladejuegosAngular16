import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TragamonedasComponent } from './tragamonedas.component';

const routes: Routes = [{ path: '', component: TragamonedasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TragamonedasRoutingModule { }
