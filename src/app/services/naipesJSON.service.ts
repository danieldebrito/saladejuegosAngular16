import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Naipe } from '../class/naipe';

@Injectable({
  providedIn: 'root'
})
export class NaipesService {

  constructor(private http: HttpClient) { }

  obtenerNaipes() {
    const url = 'assets/juegos/mayormenor/files.json'; // Ruta al archivo JSON con los datos de las naipes

    return this.http.get(url).pipe(
      map((response: any) => response.naipes)
    );
  }

  obtenernaipesAleatorias() {
    return this.obtenerNaipes().pipe(
      map((naipes: Naipe[]) => {
        // Mezclar las naipes aleatoriamente utilizando el algoritmo de Fisher-Yates
        let currentIndex = naipes.length;
        let temporaryValue, randomIndex;

        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          temporaryValue = naipes[currentIndex];
          naipes[currentIndex] = naipes[randomIndex];
          naipes[randomIndex] = temporaryValue;
        }

        return naipes;
      })
    );
  }
}