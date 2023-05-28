import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-album-photos',
  templateUrl: './user-album-photos.component.html',
  styles: [
  ] 
})
export class UserAlbumPhotosComponent implements OnInit {
  userId:any;
    // UserId:any;
  albumId:any;
  photo:any;
    constructor( myRoute:ActivatedRoute,public UService: UsersService, public router:Router){
      // console.log(myRoute.snapshot);
  
      this.albumId = myRoute.snapshot.queryParams["albumId"];
     this.userId=myRoute.snapshot.queryParams["userId"];
  //     console.log(myRoute.snapshot.queryParams);
  // console.log(this.userId,this.albumId);
  
    }

    ngOnInit(): void {
      this.UService.GetAllPhotosbyAlbumId(this.userId, this.albumId).subscribe({
        next:(data)=>{
        // console.log(data)
        this.photo = data;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
