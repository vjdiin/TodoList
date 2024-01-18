import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoActions from './todo.actions';
import { loadPost } from '../post/post.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks$: Observable<string[]>;
  newTask: string = '';
  post$: Observable<any>;

  constructor(private store: Store<{ todo: { tasks: string[] }, post: { post: any } }>) {
    this.tasks$ = this.store.select('todo', 'tasks');
    this.post$ = this.store.select('post', 'post');
  }

  ngOnInit() {
    this.store.dispatch(loadPost());
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
