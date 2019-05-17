import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatProgressSpinnerModule
} from '@angular/material';

const Material = [
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}

