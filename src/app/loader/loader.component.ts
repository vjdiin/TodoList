import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTasks } from '../todo/todo.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  tasks$!: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.tasks$ = this.store.select(selectTasks);
  }
}