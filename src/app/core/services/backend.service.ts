import {Injectable} from '@angular/core';
import {BackendInterface} from './backend.interface';
import {TaskModel} from '../models/task-model';

@Injectable()
export class BackendService implements BackendInterface {

  constructor() {
  }

  deleteTask(id: number): boolean {
    // todo: implement
    return false;
  }

  getTask(id: number): TaskModel {
    // todo: implement
    return undefined;
  }

  listTasks(): TaskModel[] {
    // todo: implement
    return undefined;
  }

  saveTask(todo: TaskModel): TaskModel {
    // todo: implement
    return undefined;
  }

  updateTask(id: number): TaskModel {
    // todo: implement
    return undefined;
  }

}
