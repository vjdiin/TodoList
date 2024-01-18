import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as postActions from './post.actions';
import { PostService } from './post.service';

@Injectable()
export class PostEffects {
    loadPost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postActions.loadPost),
            mergeMap(() =>
                this.postService.getPost().pipe(
                    map(post => postActions.loadPostSuccess({ post })),
                    catchError(error => of(postActions.loadPostFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private postService: PostService) { }
}