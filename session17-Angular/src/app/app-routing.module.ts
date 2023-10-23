import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { AddUserComponent } from './Dashboard/pages/add-user/add-user.component';
import { LoginComponent } from './Dashboard/pages/login/login.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  // {path:'posts' , component:PostsComponent},
  // {path:'posts/:id' , component:SinglePostComponent},
  // {path:'posts/add-post' , component:SinglePostComponent},
  {path : 'posts'  , children:[
    {path: ''  , component:PostsComponent},
    {path: 'add-post'  , component:AddPostComponent},
    {path: ':postId'  , component:SinglePostComponent},
  ]}, 
  {path:'contact' , component:ContactComponent},

  {path:'admin' ,children:[
    {path:'login' , component:LoginComponent},
    {path:'addUser' , component:AddUserComponent}
  ]
}
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
