import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://127.0.0.1:8000/api/posts';
  private posts: Post[] = [];
  private postIdCounter = 1;
  private postsSubject = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPosts(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  updatePosts(updatedPosts: Post[]): void {
    this.posts = updatedPosts;
    this.postsSubject.next([...this.posts]);
  }

  addPost(post: Post): void {
    if (post.title.trim() !== '' && post.content.trim() !== '') {
      if (post.id === 0) {
        post.id = this.postIdCounter++;
        this.posts.push(post);
        this.postsSubject.next([...this.posts]);
      } else {
        this.http.post<Post>(this.apiUrl, post).subscribe(newPost => {
          this.posts.push(newPost);
          this.postsSubject.next([...this.posts]);
        });
      }
    } else {
      console.error('Title and body cannot be empty!');
    }
  }


  editPost(updatedPost: Post): void {
    const index = this.posts.findIndex(p => p.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = { ...updatedPost };
      this.postsSubject.next([...this.posts]);
    } else {
      console.error('Post not found for update:', updatedPost);
    }
  }

  deletePost(postId: number): void {
    const index = this.posts.findIndex(p => p.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
      this.postsSubject.next([...this.posts]);
    } else {
      console.error('Post not found for delete:', postId);
    }
  }
}
