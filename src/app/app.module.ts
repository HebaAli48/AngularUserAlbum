import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserAlbumComponent } from './components/user-album/user-album.component';
import { UserAlbumPhotosComponent } from './components/user-album-photos/user-album-photos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotAdminComponent } from './components/not-admin/not-admin.component';
import { NotadminHeaderComponent } from './components/notadmin-header/notadmin-header.component';
import { NotadminAlbumsComponent } from './components/notadmin-albums/notadmin-albums.component';
import { NotadminPhotosComponent } from './components/notadmin-photos/notadmin-photos.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddNewUserComponent,
    HeaderComponent,
    ErrorComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UserAlbumComponent,
    UserAlbumPhotosComponent,
    LoginComponent,
    RegisterComponent,
    NotAdminComponent,
    NotadminHeaderComponent,
    NotadminAlbumsComponent,
    NotadminPhotosComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
