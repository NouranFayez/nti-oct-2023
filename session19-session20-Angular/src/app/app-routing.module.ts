import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { UpdateProfileImageComponent } from './pages/update-profile-image/update-profile-image.component';
import { authActivateGuard } from './guards/canAcitivate/auth-activate.guard';
import { authDeactivateGuard } from './guards/canDeactivate/auth-deactivate.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ParentComponent } from './pages/parent/parent.component';

const routes: Routes = [
  {path:'home' , component : IndexComponent},
  {path:'' , redirectTo : 'home' , pathMatch:'full' },
  {path:'login' , component : LoginComponent , canActivate:[authActivateGuard] , canDeactivate:[authDeactivateGuard]},
  {path:'gallery' , component : GalleryComponent , data:{page : 'gallery'}},
  {path:'posts' , component : GalleryComponent ,  data:{page : 'posts'}},
  {path:'contact' , component : ContactComponent , canActivate:[authActivateGuard]},
  {path:'update-image' , component : UpdateProfileImageComponent},
  {path:'dashbaord' , canActivate:[authActivateGuard] ,  children:[
    {path:'' , component:DashboardComponent},
    {path:'add-product' , component:AddProductComponent , canDeactivate:[authDeactivateGuard] },
  ]},
  {path: 'parent' , component : ParentComponent},
  {path:'**' , component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
