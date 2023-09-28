import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {


  API_URI = 'https://api.github.com/users';


  constructor(
    private http: HttpClient) { }

  gets(): Observable<any> {
    return this.http.get(`${this.API_URI}/danieldebrito`);
  }

  getsRepos(): Observable<any> {
    return this.http.get(`${this.API_URI}/danieldebrito/repos`);
  }

}
