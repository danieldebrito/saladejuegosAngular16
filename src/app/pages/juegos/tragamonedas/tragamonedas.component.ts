import { Component } from '@angular/core';

@Component({
  selector: 'app-tragamonedas',
  templateUrl: './tragamonedas.component.html',
  styleUrls: ['./tragamonedas.component.scss']
})
export class TragamonedasComponent {

  public carrete = ['🍒', '🍊', '🍇', '🔔', '⭐️', '💎'];
  public resultados = ['🍒', '🍒', '🍒'];

  public cantCarretes = 3; // cantidad de carretes del juego
  public cantVueltas = 10; // cantidad de giros hasta mostrar el resultado
  public tiempoVuelta = 500; // tiempo en milisegundos de la vuelta antes de mostrar el resultado

  public mensaje = 'Apreta el boton y suerte !!';

  tirar() {
    this.mensaje = 'Jugando ...';
    for (let i = 0; i < this.cantCarretes; i++) {
      let j = 0;

      const interval = setInterval((): void => {
        this.resultados[i] = this.carrete[Math.floor(Math.random() * this.carrete.length)];

        if (++j === this.cantVueltas) {
          this.chequearGanador(this.resultados);
          clearInterval(interval);
        }

      }, this.tiempoVuelta);
    }
  }

  public chequearGanador(arreglo: any[]): boolean {
    if (arreglo.length === 0) {
      return true; // Un arreglo vacío se considera que tiene todos los elementos iguales
    }

    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] !== arreglo[0]) {
        this.mensaje = 'Perdiste!!';
        return false;
      }
    }
    this.mensaje = 'Ganaste!!';
    return true;
  }
}




/*
🍒: U+1F352
🍊: U+1F34A
🍇: U+1F347
🔔: U+1F514
⭐️: U+2B50
💎: U+1F48E
*/



/*
    this.resultados = ['', '', ''];

    const intervalTime = 100; // Tiempo en milisegundos entre cada actualización del resultado
    const totalSpins = 20; // Número total de giros antes de mostrar el resultado final
    const spinDuration = 2000; // Duración total del giro en milisegundos
    const delayBetweenSpins = 1000; // Retardo entre cada giro en milisegundos

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * this.carrete.length);
      
      let currentSpin = 0;

      const spinInterval = setInterval(() => {
        this.resultados[i] = this.carrete[Math.floor(Math.random() * this.carrete.length)];
        currentSpin++;

        if (currentSpin === totalSpins) {
          clearInterval(spinInterval);
          setTimeout(() => {
            this.resultados[i] = this.carrete[randomIndex];
          }, delayBetweenSpins);
        }
      }, intervalTime);
    }
  }
   */

