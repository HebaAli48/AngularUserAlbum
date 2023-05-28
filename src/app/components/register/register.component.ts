import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public UService: UsersService, public router:Router){}

  
  add(name:any, email:any, phone:any, street:any,suite:any, city:any ){
    let address={street,suite,city};
    let newUser= {name, email, phone, address};
    if(this.myValidation.valid){

      this.UService. AddUser(newUser).subscribe();
      this.router.navigateByUrl("/login")
      }
  }
myValidation=new FormGroup({
  name:new FormControl("",[Validators.required, Validators.pattern(/[a-zA-Z]+/)]),
  email:new FormControl("",[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
  phone:new FormControl("",[Validators.required,Validators.pattern( /^[0-9]+$/)]),
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
