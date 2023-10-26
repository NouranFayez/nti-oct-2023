import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  gallery(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  galleryPagination(pageNum : any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNum}`)
  }
  posts():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

  }
}
