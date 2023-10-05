import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/class/personaje';
import { SimpsonsService } from 'src/app/services/simpsons.service';

@Component({
  selector: 'app-preguntadosdos',
  templateUrl: './preguntadosdos.component.html',
  styleUrls: ['./preguntadosdos.component.scss']
})
export class PreguntadosdosComponent implements OnInit {

  public allItems: Personaje[] = [];
  public terna: Personaje[] = [];

  public mensaje: string = '';
  public iniciarJuego = false;

  public personajeRespuesta: Personaje = {};
  public personajeCorrecto: Personaje = {};

  constructor(private simpsonsSv: SimpsonsService) { }

  public cargarTerna(){
    this.iniciarJuego = true;

    let ternaTEMP: Personaje[] = [];
    for (let index = 0; index < 3; index++) {
      ternaTEMP.push( this.allItems[Math.floor(Math.random() * this.allItems.length )] );
    }
    this.personajeCorrecto = ternaTEMP[0];
    this.terna = this.mezclar(ternaTEMP);
  }

  private mezclar(arreglo: any[]): any[] {
    const respuestasTEMP = [...arreglo];
    // Mezclar las respuestas utilizando el algoritmo de Fisher-Yates
    for (let i = respuestasTEMP.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [respuestasTEMP[i], respuestasTEMP[j]] = [respuestasTEMP[j], respuestasTEMP[i]];
    }
    return respuestasTEMP;
  }

  public checkJugada( respuesta: Personaje ){
    if (respuesta == this.personajeCorrecto) {
      this.mensaje = 'correcto';
    } else {
      this.mensaje = 'incorrecto';
    }
    this.cargarTerna();
  }

  ngOnInit() {
    this.simpsonsSv.get().subscribe(res => {
      this.allItems = res.docs.map(r => r);

//      this.cargarTerna();

      console.log(this.personajeCorrecto);
    });
  }
}
