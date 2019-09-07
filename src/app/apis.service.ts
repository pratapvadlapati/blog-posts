import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { blog } from '../app/blog';

@Injectable({
  providedIn: 'root'
})


export class ApisService {

  blog:string[]

  constructor(private http: HttpClient) { }

  //private post_URL = 'http://jsonplaceholder.typicode.com/posts'
  private Host = 'http://localhost:3000';
  private post_URL = '/api/posts'


  //get all-blog-posts
  getPost():Observable<blog>{
   return this.http.get<blog>(this.Host + '/api/posts')
  }

  //save blog-post
  savePost(form){
    
   return this.http.post(this.Host + '/api/save', form.value)
  }
}
