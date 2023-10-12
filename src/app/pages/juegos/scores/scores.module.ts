import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoresRoutingModule } from './scores-routing.module';
import { ScoresComponent } from './scores.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ScoresComponent
  ],
  imports: [
    CommonModule,
    ScoresRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ]
})
export class ScoresModule { }
