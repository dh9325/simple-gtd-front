import {Component} from '@angular/core';
import {State} from '../../../reducers/index';
import {Store} from '@ngrx/store';
import * as RouterActions from '../../actions/router.actions';

@Component({
  selector: 'gtd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store<State>) {
  }

  navigateHome() {
    this.store.dispatch(new RouterActions.Navigate('/'));
  }
}
