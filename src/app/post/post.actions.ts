import { createAction, props } from '@ngrx/store';

export const loadPost = createAction('[Post] Load Post');
export const loadPostSuccess = createAction('[Post] Load Post Success', props<{ post: any }>());
export const loadPostFailure = createAction('[Post] Load Post Failure', props<{ error: any }>());
