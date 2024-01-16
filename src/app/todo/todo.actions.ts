import { createAction, props } from '@ngrx/store';

export const addTask = createAction('[Todo] Add ask', props<{ task: string }>());
export const removeTask = createAction('[Todo] Remove Task', props<{ index: number }>());
