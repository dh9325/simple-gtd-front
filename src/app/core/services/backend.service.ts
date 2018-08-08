import {Injectable} from '@angular/core';
import {TaskModel} from '../models/task-model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class BackendService {

  constructor() {
  }

  deleteTask(id: number): Observable<boolean> {
    // todo: implement
    return of(false);
  }

  getTask(id: number): Observable<TaskModel> {
    // todo: implement
    return undefined;
  }

  listTasks(): Observable<TaskModel[]> {
    // todo: implement
    return of([]);
  }

  saveTask(todo: TaskModel): Observable<TaskModel> {
    // todo: implement
    return undefined;
  }

  updateTask(id: number): Observable<TaskModel> {
    // todo: implement
    return undefined;
  }

}
