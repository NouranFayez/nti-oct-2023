import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session18-Angular';

  constructor(public auth : AuthService){}

  ngOnInit(){
   let obj={
        "latitude": "10.52563",
        "longitude": "15.22635"
    }
    this.auth.profile(obj).subscribe(res=>{
      console.log(res)
    },()=>{
      this.auth.isLogin = false
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
    })
  }
}
