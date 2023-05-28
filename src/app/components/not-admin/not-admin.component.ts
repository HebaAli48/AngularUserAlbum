import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-not-admin',
  templateUrl: './not-admin.component.html',
  styleUrls: ['./not-admin.component.css']
})
export class NotAdminComponent  implements OnInit {
  constructor( public UService:UsersService){}
    users:any;
  ngOnInit(): void {
        this.UService.GetAllUsers().subscribe({
      next:(data)=>{
        // console.log(data)
        this.users = data;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
