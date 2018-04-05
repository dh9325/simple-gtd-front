import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {AppComponent} from './containers/app/app.component';
import {MaterialModule} from '../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';

const COMPONENTS = [AppComponent];

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
  ],
  declarations: [COMPONENTS, NavbarComponent],
  exports: [COMPONENTS],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
    };
  }
}
