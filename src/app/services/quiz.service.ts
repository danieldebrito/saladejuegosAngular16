import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  API_URI = 'https://quiz.danieldebrito.com.ar/quiz_api/public/api';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${this.API_URI}/preguntas`);
  }
}
