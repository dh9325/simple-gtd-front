import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {AppComponent} from './containers/app/app.component';
import {MaterialModule} from '../material/material.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TaskListComponent} from './containers/task-list/task-list.component';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './effects/router.effects';
import {TaskEffects} from './effects/task.effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';

const COMPONENTS = [AppComponent, NavbarComponent, TaskListComponent];

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    EffectsModule.forRoot([RouterEffects, TaskEffects]),
    StoreModule.forRoot(reducers),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
    };
  }
}
