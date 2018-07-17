import {Routes} from '@angular/router';
import {TaskListComponent} from './containers/task-list/task-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TaskListComponent},
];
