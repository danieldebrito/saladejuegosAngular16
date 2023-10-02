import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/class/pregunta';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  public preguntas: Pregunta[] = [];
  public pregunta: Pregunta = {};

  public respuestas: string[] = [];

  public mensaje = '';

  constructor(private quizSv: QuizService) { }


  public obtenerPreguntaAleatoriaSinRepetir() {

    this.mensaje = '';

    const preguntasTemp = [...this.preguntas];

    // Verificar si todas las preguntas ya se han utilizado
    if (preguntasTemp.length === 0) {
      console.log('Se han utilizado todas las preguntas');
      this.mensaje = 'Se han utilizado todas las preguntas';
      this.pregunta = {}; // no hay preguntas disponibles
    }

    // Obtener un índice aleatorio dentro del rango de las preguntas disponibles
    const indiceAleatorio = Math.floor(Math.random() * preguntasTemp.length);
    // Extraer la pregunta aleatoria del array temporal
    this.pregunta = preguntasTemp.splice(indiceAleatorio, 1)[0];


    const resp = ([
      this.pregunta.correcta,
      this.pregunta.falsa1,
      this.pregunta.falsa2
    ]);

    // Mezclar las respuestas
    this.respuestas = this.mezclarRespuestas(resp);
  }

  private mezclarRespuestas(respuestas: any[]): string[] {
    const respuestasTEMP = [...respuestas];

    // Mezclar las respuestas utilizando el algoritmo de Fisher-Yates
    for (let i = respuestasTEMP.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [respuestasTEMP[i], respuestasTEMP[j]] = [respuestasTEMP[j], respuestasTEMP[i]];
    }

    return respuestasTEMP;
  }

  public checkrespuesta(rta: string){
    if(rta === this.pregunta.correcta){
      this.mensaje = 'Es Correcta !!';
    } else {
      this.mensaje = 'Es Incorrecto !!, era ' + this.pregunta.correcta;
    }
  }


  public getPreguntas() {
    this.quizSv.get().subscribe(res => {
      this.preguntas = res;

      this.obtenerPreguntaAleatoriaSinRepetir();
    });
  }

  ngOnInit(): void {
    this.getPreguntas();
  }

}
