import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styles: [
  ]
})
export class DeleteUserComponent {
  ID:any;
   constructor(myRoute:ActivatedRoute,public UService:UsersService ,public router:Router){
     this.ID = myRoute.snapshot.params["id"];
    //  console.log(myRoute.snapshot.params["id"]);
     
  }
  delItem(){
     this.UService.  DeleteUserByID(this.ID).subscribe({ });
     this.router.navigateByUrl("/users")
    }
}
