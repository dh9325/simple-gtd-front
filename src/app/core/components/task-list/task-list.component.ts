import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task-model';

@Component({
  selector: 'gtd-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: TaskModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
