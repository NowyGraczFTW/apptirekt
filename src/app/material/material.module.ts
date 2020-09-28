import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

const material = [
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule,
  ScrollingModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
