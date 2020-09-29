import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
})
export class MaterialModule {}
