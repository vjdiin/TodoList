import { createReducer, on } from '@ngrx/store';
import * as postActions from './post.actions';
import { initialPostState } from './post.state';

export const initialState = {
    post: null,
    error: null
};

export const postReducer = createReducer(
    initialPostState,
    on(postActions.loadPost, state => ({ ...state, loading: true, error: null })),
    on(postActions.loadPostSuccess, (state, { post }) => ({ ...state, post, loading: false })),
    on(postActions.loadPostFailure, (state, { error }) => ({ ...state, error, loading: false })),
);