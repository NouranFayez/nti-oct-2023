import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model : Login ={
    email:'',
    password:''
  }
  errorMessage = null
  constructor(private auth : AuthService , private toastr : ToastrService , private router : Router){}

  handleSubmit(formGroup : NgForm){
    if(formGroup.valid){
      console.log(formGroup)
      // subscribe ==> next , error , complete
      this.auth.login(this.model).subscribe(res=>{
        console.log(res)
        this.toastr.success('login successfully')
        localStorage.setItem('token' , res.data.token)
        localStorage.setItem('userName' , res.data.name) // refresh
        this.auth.userName = res.data.name // run time
        this.auth.isLogin = true
        this.router.navigateByUrl('/')
      },(err)=>{
        console.log(err.error.message)
        this.errorMessage = err.error.message
        this.toastr.error(err.error.message);
      },()=>{

      })
    }
  }

}
