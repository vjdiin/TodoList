import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

export interface TodoState {
    tasks: string[];
}

export const initialState: TodoState = {
    tasks: [],
};

export const todoReducer = createReducer(
    initialState,
    on(TodoActions.addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
    on(TodoActions.removeTask, (state, { index }) => ({ ...state, tasks: state.tasks.filter((_, i) => i !== index) })),
);
