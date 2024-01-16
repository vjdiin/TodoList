import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todo');

// dobije taskove
export const selectTasks = createSelector(
    selectTodoState,
    (state: TodoState) => state.tasks
);