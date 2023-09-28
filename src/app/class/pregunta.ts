export class Pregunta {
    constructor(
      public id?: string,
      public pregunta?: string,
      public correcta?: string,
      public falsa1?: string,
      public falsa2?: string
    ) { }
  }