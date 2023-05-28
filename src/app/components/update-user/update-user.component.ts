import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent implements OnInit {
  // initialValue = {
  //   name: ,
  //   email:,
  //   phone:,
  //   street:,
  //   suite:,
  //   city:
  // };
  ID:any;
  user:any;
  // @Input() student:any;
  constructor(myRoute:ActivatedRoute,public UService: UsersService, public router:Router){
    this.ID = myRoute.snapshot.params["id"];

    // console.log(myRoute.snapshot.params["id"]);

    
  }
 
  ngOnInit(): void {

    this.UService.GetUserByID(this.ID).subscribe({
      next:(data:Object)=>{
        // console.log(data)
        this.user = data;
        this.myValidation.setValue({
          name: this.user.name,
          email: this.user.email,
          phone: this.user.phone,
          street: this.user.address.street,
          suite: this.user.address.suite,
          city: this.user.address.city
        });

      },
      error:(err)=>{console.log(err)}
    });

  }
   
  update(name:any, email:any, phone:any, street:any,suite:any, city:any,e:any){
    // console.log(e);
    
    let address={street,suite,city};
    let newUser = {name, email, phone, address};
    if(this.myValidation.valid){

      this.UService.UpdateUser( this.ID,newUser).subscribe();
      this.router.navigateByUrl("/users")
      }

      
  }
  
  myValidation=new FormGroup({
    
    name:new FormControl("",[Validators.required, Validators.pattern(/[a-zA-Z]+/)]),
    email:new FormControl("",[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    phone:new FormControl("",Validators.required),
    street:new FormControl("",Validators.required),
    suite:new FormControl("",Validators.required),
    city:new FormControl("",[Validators.required, Validators.pattern(/[a-zA-Z]+/)])
  
  })

  get NameValid(){
    if((this.myValidation.controls["name"].value!=="")){
      
      return ((this.myValidation.controls["name"].valid))
     
    }
     return true
  }
  get PhoneValid(){
    if((this.myValidation.controls["phone"].value!=="")){
      
      return ((this.myValidation.controls["phone"].valid))
     
    }
     return true
  }
  get MailValid(){
    if((this.myValidation.controls["email"].value!=="")){
      
      return ((this.myValidation.controls["email"].valid))
     
    }
     return true
  }
  get StreetValid(){
    if((this.myValidation.controls["street"].value!=="")){
      
      return ((this.myValidation.controls["street"].valid))
     
    }
     return true
  }
  get SuiteValid(){
    if((this.myValidation.controls["suite"].value!=="")){
      
      return ((this.myValidation.controls["suite"].valid))
     
    }
     return true
  }
  get CityValid(){
    if((this.myValidation.controls["city"].value!=="")){
      
      return ((this.myValidation.controls["city"].valid))
     
    }
     return true}
  
  }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UsersService } from 'src/app/services/users.service';
// import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-update-user',
//   templateUrl: './update-user.component.html',
//   styles: [
//   ]
// })
// export class UpdateUserComponent implements OnInit {
//   // initialValue = {
//   //   name:,
//   //   email:,
//   //   phone:,
//   //   street:,
//   //   suite:,
//   //   city:
//   // };
  
  
//   ID:any;
//   user:any;
//   // @Input() student:any;
//   constructor(myRoute:ActivatedRoute,public UService: UsersService, public router:Router){
//     this.ID = myRoute.snapshot.params["id"];

//     // console.log(myRoute.snapshot.params["id"]);

    
//   }
 
//   ngOnInit(): void {

//     this.UService.GetUserByID(this.ID).subscribe({
//       next:(data)=>{
//         // console.log(data)
//         this.user = data;
//       },
//       error:(err)=>{console.log(err)}
//     });

//   }
  
//   update(name:any, email:any, phone:any, street:any,suite:any, city:any,e:any){
//     // console.log(e);
    
//     let address={street,suite,city};
//     let newUser = {name, email, phone, address};

//       this.UService.UpdateUser( this.ID,newUser).subscribe();
//       this.router.navigateByUrl("/users")
  
      
//   }
  

//   }

