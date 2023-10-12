import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/auth/models/user';
import { Naipe } from 'src/app/class/naipe';
import { Score } from 'src/app/class/score';
import { NaipesService } from 'src/app/services/naipesJSON.service';
import { ScoresService } from 'src/app/services/scores.FIRE.service';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.scss']
})
export class MayormenorComponent implements OnInit {
    3

  public score: Score = {};
  public scores: Score[] = [];

  public currentUser: User = {};

  public naipes: Naipe[] = [];
  cartaAleatoria: Naipe = {};
  cartaAleatoriaAnterior: Naipe = {};
  indiceActual: number = 0;
  public mensaje: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private cnaipesSv: NaipesService,
    private scoresSv: ScoresService) { }

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
        this.score
      } else {
        this.mensaje = 'Perdiste!!';
      }

    }
  }

  public getScoreUsuario(uid: string) {
    this.scoresSv.getItems().subscribe(res => {
      this.score = res.find(e => e.uid == this.currentUser.uid  );
    });
  }

  private getCurretUser() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = {};
      }
    });
  }

  ngOnInit() {
    this.obtenerTodosLosNaipesAleatorios();
    this.getCurretUser();
  }
}
