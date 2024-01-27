// post.service.ts
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];
  private postIdCounter = 1;
  private postsSubject = new BehaviorSubject<Post[]>([]);

  getPosts(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  addPost(post: Post): void {
    post.id = this.postIdCounter++;
    this.posts.push(post);
    this.postsSubject.next([...this.posts]);
  }

  updatePost(updatedPost: Post): void {
    const index = this.posts.findIndex(p => p.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = { ...updatedPost };
      this.postsSubject.next([...this.posts]);
    }
  }

  deletePost(postId: number): void {
    this.posts = this.posts.filter(p => p.id !== postId);
    this.postsSubject.next([...this.posts]);
  }
}
