import {Action} from '@ngrx/store';
import {TaskModel} from '../models/task-model';

export enum TaskActionTypes {
  Load = '[Task] Load',
  LoadSuccess = '[Task] LoadSuccess',
  Create = '[Task] Create',
  Get = '[Task] Get',
  Update = '[Task] Update',
  Delete = '[Task] Delete',
}

export class Load implements Action {
  readonly type = TaskActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = TaskActionTypes.LoadSuccess;

  constructor(public payload: TaskModel[]) {
  }
}

export class Create implements Action {
  readonly type = TaskActionTypes.Create;

  constructor(public payload: TaskModel) {
  }
}

export class Get implements Action {
  readonly type = TaskActionTypes.Get;

  constructor(public id: number) {
  }
}

export class Update implements Action {
  readonly type = TaskActionTypes.Update;

  constructor(public id: number) {
  }
}

export class Delete implements Action {
  readonly type = TaskActionTypes.Delete;

  constructor(public id: number) {
  }
}

export type TaskActions = Load | LoadSuccess | Create | Get | Update | Delete;
