import { User } from "firebase/auth";

export class Mensaje {
    constructor(
      public id?: string,
      public displayName?: string,
      public user?: User,
      public mensaje?: string,
      public fecha?: number,
      public uid?: string, // llave del usr que mando el mensaje
    ) { }
  }