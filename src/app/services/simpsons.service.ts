import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {
  API_URI = 'https://apisimpsons.fly.dev/api';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${this.API_URI}/personajes`).pipe(
      map((response: any) => response));
  }
}
