import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { style } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm !: FormGroup;
  constructor (private formBuilder : FormBuilder, private http : HttpClient, private router : Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name : [''],
      email : ['']
    })
  }

  login(){
    this.http.get<any>("https://jsonplaceholder.typicode.com/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.name === this.loginForm.value.name &&  a.email === this.loginForm.value.email
      })
      console.log(user);
      
      if(user){
        if(this.loginForm.value.name=="Leanne Graham"&&this.loginForm.value.email=="Sincere@april.biz"){
          alert ("Login Success WELCOME ADMIN ^_^");
          this.loginForm.reset();
          this.router.navigate(['users'])
        }
        else{
          alert ("Login Success !!");
        this.loginForm.reset();
        this.router.navigate(['user'])}
        
      }
      else if(this.loginForm.value.name==""||this.loginForm.value.email=="" ){
        alert (" Name and email are required !! please login again");
        this.router.navigateByUrl("/login");
      
      }
      else {

        alert ("User Not Found !! please signup");
        this.router.navigateByUrl("/register");
      }
    },err=>{
      alert ("Something Went Wrong !!")
    })
  }

  onSubmit(form: NgForm) {
    const user = {
      name: form.value.name,
      email: form.value.email,
    };

    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        console.log(res);
        form.reset();
      });
  }

}
