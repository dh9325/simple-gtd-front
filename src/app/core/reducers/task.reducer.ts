import {TaskModel} from '../models/task-model';
import {TaskActions, TaskActionTypes} from '../actions/task.actions';

export interface State {
  tasks: TaskModel[];
}

export const initialState: State = {
  tasks: null,
};

export function reducer(state = initialState, action: TaskActions): State {
  switch (action.type) {
    case TaskActionTypes.LoadSuccess:
      return {...state, tasks: action.payload};
    default:
      return state;
  }
}


