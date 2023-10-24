import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  constructor(public auth : AuthService){
    let token = localStorage.getItem('token')
    let userName = localStorage.getItem('userName')
    if(token) this.auth.isLogin =  true
    if(userName) this.auth.userName = userName

  }
  handleClick(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    this.auth.isLogin = false
  }

}
