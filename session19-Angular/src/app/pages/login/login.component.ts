import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(null , [Validators.required , Validators.email , Validators.minLength(10)]) , //  Validators.pattern()
    password : new FormControl(null , [Validators.required])
  })


  isSubmitted = false

  constructor(private auth : AuthService){}

  get userEmail(){return this.loginForm.controls.email}
  get userPassword(){return this.loginForm.controls.password}

  get loginControls() {return this.loginForm.controls}


  handleSubmit(){
    this.isSubmitted = true
    console.log(this.loginForm)

    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
        localStorage.setItem('token' , res.data.token)
      })
    }
  }

}
