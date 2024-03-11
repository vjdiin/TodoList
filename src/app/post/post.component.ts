import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post = { id: 0, title: '', content: '' };
  selectedPost: Post | null = null;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(): void {
    this.postService.addPost({ ...this.newPost });
    this.newPost = { id: 0, title: '', content: '' };
  }

  updatePost(post: Post): void {
    this.selectedPost = { ...post };
  }

  deletePost(postId: number): void {
    this.postService.deletePost(postId);
  }

  saveChanges(): void {
    if (this.selectedPost) {
      this.postService.editPost({ ...this.selectedPost });
      this.selectedPost = null;
    }
  }

  fetchAPIPosts(): void {
    this.postService.fetchPosts().subscribe(fetchedPosts => {
      console.log('Fetched posts:', fetchedPosts);
      if (Array.isArray(fetchedPosts)) {
        const newPosts = fetchedPosts.filter(fetchedPost => !this.posts.find(localPost => localPost.id === fetchedPost.id));
        if (newPosts.length > 0) {
          this.posts = [...this.posts, ...newPosts];
          this.postService.updatePosts([...this.posts]);
        }
      } else {
        console.error('Invalid data returned from API:', fetchedPosts);
      }
    });
  }
}