import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  API_URI = 'https://clientes.api.greenborn.com.ar';


  constructor(
    private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${this.API_URI}/public-random-word?c=1&l=6`);
  }
}
