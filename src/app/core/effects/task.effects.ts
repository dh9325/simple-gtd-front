import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BackendService} from '../services/backend.service';
import {LoadSuccess, TaskActionTypes} from '../actions/task.actions';
import {exhaustMap, map} from 'rxjs/operators';

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions, private service: BackendService) {
  }

  @Effect()
  load$ = this.actions$.pipe(
      ofType(TaskActionTypes.Load),
      exhaustMap(action => {
        return this.service.listTasks().pipe(
            map(tasks => new LoadSuccess(tasks)),
        );
      }),
  );
}
