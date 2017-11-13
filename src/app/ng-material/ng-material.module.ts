import { NgModule } from '@angular/core';
import { MatMenuModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule, MatMenuModule,
  ],
  exports: [
    MatToolbarModule, MatMenuModule,
  ],
  declarations: [],
})
export class NgMaterialModule {
}
