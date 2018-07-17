import {TaskModel} from '../models/task-model';

export interface BackendInterface {
  listTasks(): TaskModel[];

  saveTask(todo: TaskModel): TaskModel;

  getTask(id: number): TaskModel;

  updateTask(id: number): TaskModel;

  deleteTask(id: number): boolean;
}
