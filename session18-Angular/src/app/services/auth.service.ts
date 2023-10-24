import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://techs-experts.net/api"
  isLogin = false
  userName :any
  navbarFlag = true
  constructor(private http : HttpClient) { }

  login(obj:Login):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_login` , obj)
  }

  profile(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/profile` , obj)
  }


}
