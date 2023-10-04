import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/class/personaje';
import { SimpsonsService } from 'src/app/services/simpsons.service';

import { map } from 'rxjs/operators'

@Component({
  selector: 'app-preguntadosdos',
  templateUrl: './preguntadosdos.component.html',
  styleUrls: ['./preguntadosdos.component.scss']
})
export class PreguntadosdosComponent {

  public allItems: Personaje[] = [];

  constructor( private simpsonsSv: SimpsonsService ){}


  ngOnInit(){
    this.simpsonsSv.get().subscribe(res => {
      if (res) {
        this.allItems = res;
        console.log(this.allItems.map(item => item.Nombre));
      } else {
        console.error('Service response is null or undefined.');
      }
    });
  }
}
