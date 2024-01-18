import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post$: Observable<any>;

  constructor(private store: Store<{ post: { post: any } }>) {
    this.post$ = this.store.select('post', 'post');
  }

  ngOnInit() { }
}