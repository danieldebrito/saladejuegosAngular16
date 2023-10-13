import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, orderBy, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Score } from 'src/app/class/score';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private firestore: Firestore) { }

  public addItem(item: Score) {
    const col = collection(this.firestore, 'Scores');
    const newDoc = doc(col);

    item.id = newDoc.id; // guardo el id del documento que crea firebase
    setDoc(newDoc, item);
  }

  public getItems(): Observable<Score[]> {
    const col = collection(this.firestore, 'Scores');
    const queryObservable = query(col, orderBy('uid')); // ordenar por fecha
    const observable = collectionData(queryObservable).pipe(
      map(res => {
        return res as Score[];
      }),
      catchError(err => {
        console.error('Error obteniendo datos:', err);
        return throwError(() => err);
      })
    );
    return observable;
  }

  public getItemById(id: string): Observable<Score> {
    const col = collection(this.firestore, 'Scores');
    const documento = doc(col, id);

    const observable = docData(documento).pipe(
      map(res => {
        return res as Score;
      }),
      catchError(err => {
        console.error('Error obteniendo el documento:', err);
        return throwError(() => err);
      })
    );
    return observable;
  }

  public update(id: string, Item: any) {
    const col = collection(this.firestore, 'Scores');
    const documento = doc(col, id);

    updateDoc(documento, Item);
  }

  public delete(id: string) {
    const col = collection(this.firestore, 'Scores');
    const documento = doc(col, id);

    deleteDoc(documento);
  }

  ////////////////////////////////////////////////////////////////////////////

  public getScoreUsuario(): any {

    let scoreTEMP: Score = {};
    const user = JSON.parse(localStorage.getItem('user'));

    this.getItems().subscribe( res => {

      if(user){
        scoreTEMP = res.find(e => e.uid == user.uid);
        console.log(scoreTEMP);
        if(scoreTEMP === undefined){
          scoreTEMP = {};
          scoreTEMP.uid = user.uid;
          console.log('create');
          this.addItem(scoreTEMP);
        }
      }

      return scoreTEMP;
    });
  }
}
