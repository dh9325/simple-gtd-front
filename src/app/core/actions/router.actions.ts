import {Action} from '@ngrx/store';

export enum RouterActionTypes {
  Navigate = '[Router] Navigate'
}

export class Navigate implements Action {
  readonly type = RouterActionTypes.Navigate;

  constructor(public payload: string) {
  }
}

export type RouterActions = Navigate;
