import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { ErrorComponent } from './components/error/error.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserAlbumComponent } from './components/user-album/user-album.component';
import { UserAlbumPhotosComponent } from './components/user-album-photos/user-album-photos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { NotAdminComponent } from './components/not-admin/not-admin.component';
import { NotadminAlbumsComponent } from './components/notadmin-albums/notadmin-albums.component';
import { NotadminPhotosComponent } from './components/notadmin-photos/notadmin-photos.component';

const routes: Routes = 
[
  // photos?userId=1&&albumId=2
  // {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'user',component:NotAdminComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:userId/albums',component:UserAlbumComponent},
  {path:'user/:userId/albums',component:NotadminAlbumsComponent},
  {path:'photos',component:UserAlbumPhotosComponent},
  {path:'photo',component:NotadminPhotosComponent},
  {path:'add',component: AddNewUserComponent},
  {path:'users/:id/update',component:UpdateUserComponent},
  {path:'users/:id/delete',component:DeleteUserComponent},
  {path:'**',component:ErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
