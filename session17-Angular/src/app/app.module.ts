import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { AddUserComponent } from './Dashboard/pages/add-user/add-user.component';
import { LoginComponent } from './Dashboard/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PostsComponent,
    SinglePostComponent,
    ContactComponent,
    NavbarComponent,
    AddPostComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
