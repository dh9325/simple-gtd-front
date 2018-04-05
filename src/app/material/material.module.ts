import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MaterialModule {
}
