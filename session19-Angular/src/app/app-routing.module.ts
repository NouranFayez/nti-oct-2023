import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { UpdateProfileImageComponent } from './pages/update-profile-image/update-profile-image.component';

const routes: Routes = [
  {path:'' , component : IndexComponent},
  {path:'login' , component : LoginComponent},
  {path:'gallery' , component : GalleryComponent},
  {path:'contact' , component : ContactComponent},
  {path:'update-image' , component : UpdateProfileImageComponent},
  {path:'**' , component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
