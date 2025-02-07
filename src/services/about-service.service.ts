import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutServiceService {
  constructor(private http: HttpClient) {}

  aboutService(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  aboutService2(): Observable<any> {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/comments?postId=1'
    );
  }
}
