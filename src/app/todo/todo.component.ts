import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoActions from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks$: Observable<string[]>;
  newTask: string = '';

  constructor(private store: Store<{ todo: { tasks: string[] } }>) {
    this.tasks$ = this.store.select('todo', 'tasks');
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.store.dispatch(TodoActions.addTask({ task: this.newTask.trim() }));
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.store.dispatch(TodoActions.removeTask({ index }));
  }
}
