import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://techs-experts.net/api'
  constructor(private http: HttpClient) { }

  login(obj:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/client/customer_login` , obj)
  }

  updateImage(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/update_profile_image` , obj)
  }
}
