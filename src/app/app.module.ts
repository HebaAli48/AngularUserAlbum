import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
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
import { HomeComponent } from './components/home/home.component';
import { NotadminHomeComponent } from './components/notadmin-home/notadmin-home.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    ErrorComponent,
    UserAlbumComponent,
    UserAlbumPhotosComponent,
    LoginComponent,
    RegisterComponent,
    NotAdminComponent,
    NotadminHeaderComponent,
    NotadminAlbumsComponent,
    NotadminPhotosComponent,
    HomeComponent,
    NotadminHomeComponent,

  
    
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
