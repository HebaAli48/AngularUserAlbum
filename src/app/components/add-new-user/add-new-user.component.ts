import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styles: [],
})
export class AddNewUserComponent implements OnInit {
  constructor(public UService: UsersService, public router: Router) {}

  // <input type="button" (click)="add(name.value, email.value, phone.value,street.value,suite.value,city.value)" value="ADD" class="btn btn-outline-success" />
  users: any;
  ngOnInit(): void {
    this.UService.GetAllUsers().subscribe({
      next: (data) => {
        // console.log(data)
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  add(name: any, email: any, phone: any, street: any, suite: any, city: any) {
    // console.log(this.users);

    let address = { street, suite, city };
    let newUser = { name, email, phone, address };
    if (this.myValidation.valid) {
      // this.myEvent.emit(newUser)
      // this.users.push(newUser);
      this.UService. AddUser(newUser).subscribe();
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
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
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
