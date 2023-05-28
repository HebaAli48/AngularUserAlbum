import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  ID:any;
  user:any;
  constructor(  public DService: DataService, public UService:UsersService,public router: Router){
    // console.log(this.DService.userData);

  }
    users:any;
  ngOnInit(): void {
    // console.log(this.DService.userData);
    
        this.UService.GetAllUsers().subscribe({
      next:(data)=>{
        // console.log(data)
        this.users = data;
      },
      error:(err)=>{console.log(err)}
    })
    // if(this.DService.userData){
    //   // console.log("hi");
    //    console.log(this.DService.userData);
       
    //   let id=(this.users[this.users.length-1].id) +1
    // //  let Naddress = { this.DService.userData.address.street,this.DService.userData.address.suite,this.DService.userData.address.city };
    // // let NnewUser = {id,this.DService.userData.name, this.DService.userData.email, this.DService.userData.phone, Naddress };
    //         this.users.push(this.DService.userData);

    // }
  }
  
  clickUpdate(e:any){
    // console.log(e.target.id);
this.ID=e.target.id
// console.log(this.users[this.ID]);


        this.myValidation.setValue({
          name: this.users[this.ID].name,
          email: this.users[this.ID].email,
          phone: this.users[this.ID].phone,
          street: this.users[this.ID].address.street,
          suite: this.users[this.ID].address.suite,
          city: this.users[this.ID].address.city
        });

   
  }

  delItem(){
    this.users=this.users.filter((item:any)=>item.id!=this.ID)

   
  
  }   
  update(name:any, email:any, phone:any, street:any,suite:any, city:any){
    // console.log(e);
  //  console.log(this.ID);
  //  console.log( this.users[this.ID].name);
   
   
    let address={street,suite,city};
    let newUser = {name, email, phone, address};
     console.log(newUser);
    if(this.myValidation.valid){


      this.users[this.ID].name=newUser.name
        // this.user=newUser
      // this.UService.UpdateUser( this.ID,newUser).subscribe();
      this.router.navigateByUrl("/users")
      }
      this.users[this.ID].name=newUser.name
      this.users[this.ID].email=newUser.email
      this.users[this.ID].phone=newUser.phone
      this.users[this.ID].address.street=newUser.address.street
      this.users[this.ID].address.suite=newUser.address.suite
      this.users[this.ID].address.city=newUser.address.city
  }






  add(name: any, email: any, phone: any, street: any, suite: any, city: any) {
    // console.log(this.users);

  let id=(this.users[this.users.length-1].id) +1

    let address = { street, suite, city };
    let newUser = {id,name, email, phone, address };
    if (this.myValidation.valid) {
      // this.myEvent.emit(newUser)
      this.users.push(newUser);
      
      // this.UService. AddUser(newUser).subscribe();
      this.router.navigateByUrl('/users');
    }
  }






  myValidation = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/[a-zA-Z]+/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    ]),
    phone: new FormControl('', 
      Validators.required
     ),
    street: new FormControl('', Validators.required),
    suite: new FormControl('', Validators.required),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern(/[a-zA-Z]+/),
    ]),
  });
  get NameValid() {
    if (this.myValidation.controls['name'].value !== '') {
      return this.myValidation.controls['name'].valid;
    }
    return true;
  }
  get PhoneValid() {
    if (this.myValidation.controls['phone'].value !== '') {
      return this.myValidation.controls['phone'].valid;
    }
    return true;
  }
  get MailValid() {
    if (this.myValidation.controls['email'].value !== '') {
      return this.myValidation.controls['email'].valid;
    }
    return true;
  }
  get StreetValid() {
    if (this.myValidation.controls['street'].value !== '') {
      return this.myValidation.controls['street'].valid;
    }
    return true;
  }
  get SuiteValid() {
    if (this.myValidation.controls['suite'].value !== '') {
      return this.myValidation.controls['suite'].valid;
    }
    return true;
  }
  get CityValid() {
    if (this.myValidation.controls['city'].value !== '') {
      return this.myValidation.controls['city'].valid;
    }
    return true;
  }
}

