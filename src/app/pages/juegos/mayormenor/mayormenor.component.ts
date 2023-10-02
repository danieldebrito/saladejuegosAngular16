import { Component, OnInit } from '@angular/core';
import { Naipe } from 'src/app/class/naipe';
import { NaipesService } from 'src/app/services/naipes.service';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.scss']
})
export class MayormenorComponent implements OnInit {

  public naipes: Naipe[] = [];

  cartaAleatoria: Naipe = {};
  cartaAleatoriaAnterior: Naipe = {};

  indiceActual: number = 0;

  public mensaje: string = '';

  constructor(private cnaipesSv: NaipesService) { }

  obtenerNaipeAleatorio() {
    if (this.naipes && this.indiceActual < this.naipes.length) {
      this.cartaAleatoria = this.naipes[this.indiceActual];
      this.indiceActual++;
    }
  }

  public obtenerTodosLosNaipesAleatorios() {
    this.cnaipesSv.obtenernaipesAleatorias().subscribe((naipes: Naipe[]) => {
      this.naipes = naipes;
      this.indiceActual = 0;

      this.obtenerNaipeAleatorio();
    });
  }

  public checkJugada(jugada: string) {

    let resultado: string = '';

    this.cartaAleatoriaAnterior = this.cartaAleatoria;

    if (this.naipes && this.indiceActual < this.naipes.length) {
      this.cartaAleatoria = this.naipes[this.indiceActual];
      this.indiceActual++;



      if ((this.cartaAleatoriaAnterior.valor !== undefined && this.cartaAleatoria.valor !== undefined) && (this.cartaAleatoriaAnterior.valor > this.cartaAleatoria.valor)) {
        resultado = 'menor'
      } else {
        resultado = 'mayor'
      }

      if (jugada == resultado) {
        this.mensaje = 'Bien!!';
      } else {
        this.mensaje = 'Perdiste!!';
      }

    }
  }

  ngOnInit() {
    this.obtenerTodosLosNaipesAleatorios();
  }
}
