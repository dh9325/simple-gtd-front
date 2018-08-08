import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTask from './task.reducer';

export interface State {
  task: fromTask.State;
}

export const reducers: ActionReducerMap<State> = {
  task: fromTask.reducer,
};

export const getCoreState = createFeatureSelector<State>('core');
export const getTaskState = createSelector(getCoreState, state => state.task);
export const getTasks = createSelector(getTaskState, state => state.tasks);
