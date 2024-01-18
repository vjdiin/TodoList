import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoaderComponent } from './loader/loader.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'posts', component: PostComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
