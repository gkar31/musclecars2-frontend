import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

const Material = [
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule
  
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}

