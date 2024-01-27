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
      this.postService.updatePost({ ...this.selectedPost });
      this.selectedPost = null;
    }
  }
}