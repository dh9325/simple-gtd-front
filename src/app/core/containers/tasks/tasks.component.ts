import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Load} from '../../actions/task.actions';
import {Observable} from 'rxjs/Observable';
import {TaskModel} from '../../models/task-model';
import {getTasks, State} from '../../reducers';

@Component({
  selector: 'gtd-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<TaskModel[]>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new Load());
    this.tasks$ = this.store.pipe(select(getTasks));
  }

  ngOnInit() {
  }

}
