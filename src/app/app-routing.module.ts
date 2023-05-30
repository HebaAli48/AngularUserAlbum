import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ErrorComponent } from './components/error/error.component';
import { UserAlbumComponent } from './components/user-album/user-album.component';
import { UserAlbumPhotosComponent } from './components/user-album-photos/user-album-photos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { NotAdminComponent } from './components/not-admin/not-admin.component';
import { NotadminAlbumsComponent } from './components/notadmin-albums/notadmin-albums.component';
import { NotadminPhotosComponent } from './components/notadmin-photos/notadmin-photos.component';
import { HomeComponent } from './components/home/home.component';
import { NotadminHomeComponent } from './components/notadmin-home/notadmin-home.component';

const routes: Routes = 
[
  // photos?userId=1&&albumId=2
  // {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'user',component:NotAdminComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'Home',component: NotadminHomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:userId/albums',component:UserAlbumComponent},
  {path:'user/:userId/albums',component:NotadminAlbumsComponent},
  {path:'photos',component:UserAlbumPhotosComponent},
  {path:'photo',component:NotadminPhotosComponent},
  {path:'**',component:ErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
