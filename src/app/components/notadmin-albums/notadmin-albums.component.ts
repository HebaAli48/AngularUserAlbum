import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notadmin-albums',
  templateUrl: './notadmin-albums.component.html',
  styleUrls: ['./notadmin-albums.component.css']
})
export class NotadminAlbumsComponent implements OnInit {
  album:any;
  UserId:any;
  
// albumId:any
  constructor( myRoute:ActivatedRoute,public UService: UsersService, public router:Router){
    console.log(myRoute);
    // console.log(myRoute.snapshot);

    this.UserId = myRoute.snapshot.params["userId"];
    // this.AlbumId=["id"];
    // console.log(myRoute.snapshot);
  }
 
  ngOnInit(): void {
    this.UService.GetAllAlbumsbyuserId(this.UserId).subscribe({
      next:(data)=>{
      // console.log(data)
      this.album = data;
    },
    error:(err)=>{console.log(err)}
  })
}

Navigate(b:any){
   this.router.navigate(['/', 'photo'], { queryParams: { userId: this.UserId ,albumId:b.id} });
}
}
