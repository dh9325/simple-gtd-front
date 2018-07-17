import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {BackendService} from '../services/backend.service';

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions, private service: BackendService) {
  }

  @Effect()
  list$ = this.actions$.pipe();

  @Effect()
  create$ = this.actions$.pipe();

  @Effect()
  get$ = this.actions$.pipe();

  @Effect()
  update$ = this.actions$.pipe();

  @Effect()
  delete$ = this.actions$.pipe();
}
