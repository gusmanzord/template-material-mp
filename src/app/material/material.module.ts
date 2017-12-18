import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatDialogModule,
  MatSelectModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatTooltipModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }

