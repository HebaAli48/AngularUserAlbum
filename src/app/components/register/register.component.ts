import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    public DService: DataService,
    private formBuilder : FormBuilder,
    private http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {}
  add(name: any, email: any, phone: any, street: any, suite: any, city: any) {
    let address = { street, suite, city };
    let newUser = { name, email, phone, address };

    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.name === this.myValidation.value.name &&
            a.email === this.myValidation.value.email
          );
        });

        if (user) {
          
          alert('user is already exists ,please login Again');
          this.router.navigateByUrl('/login');
        }
        else if(this.myValidation.value.name=="heba"&&this.myValidation.value.email=="heba@gmail.com"){
          alert('user is already exists ,please login Again');
          this.router.navigateByUrl('/login');
        }

      
        else {
          
          if (this.myValidation.valid) {
            alert('welcome New User  !! please sign in');
            this.DService.userData={
              name:newUser.name,
              email:newUser.email,
              phone:newUser.phone,
              address:{
                street:newUser.address.street,
                suite:newUser.address.suite,
                city:newUser.address.city
              }
              };
                this.router.navigateByUrl('/login');
              
            }

         
          // console.log(newUser);
            
          //   console.log(this.DService.userData);
        }
      },
      (err) => {
        alert('Something Went Wrong !!');
      }
    );
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
      Validators.required,
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
