import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateProfileImageComponent } from './pages/update-profile-image/update-profile-image.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { ErrorComponent } from './pages/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UpdateProfileImageComponent,
    UpdateProfileComponent,
    GalleryComponent,
    ContactComponent,
    IndexComponent,
    ErrorComponent,
    DashboardComponent,
    AddProductComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
