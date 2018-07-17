import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {Navigate, RouterActionTypes} from '../actions/router.actions';
import {exhaustMap, map} from 'rxjs/operators';
import {fromPromise} from 'rxjs/observable/fromPromise';

@Injectable()
export class RouterEffects {

  constructor(private actions$: Actions, private router: Router) {
  }

  @Effect()
  navigate$ = this.actions$.pipe(
      ofType(RouterActionTypes.Navigate),
      map((action: Navigate) => action.payload),
      exhaustMap((path) => {
        return fromPromise(this.router.navigate([path]));
      }),
  );
}
