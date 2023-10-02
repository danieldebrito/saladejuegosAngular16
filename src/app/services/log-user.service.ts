import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { UserLog } from 'src/app/class/userLog';

@Injectable({
  providedIn: 'root'
})
export class LogUserService {

  constructor(private firestore: Firestore) { }

  public addItem(item: UserLog) {
    const col = collection(this.firestore, 'UserLogs');
    const newDoc = doc(col);

    item.id = newDoc.id; // guardo el id del documento que crea firebase
    setDoc( newDoc, item)
  }

  public getItems() {
    const col = collection(this.firestore, 'UserLogs');
    const Observable = collectionData(col);

    Observable.subscribe(res => {
      return res;
    })
  }

  public update(id: string, Item: any) {
    const col = collection(this.firestore, 'UserLogs');
    const documento = doc(col, id);

    updateDoc(documento,  Item );
  }

  public delete(id: string) {
    const col = collection(this.firestore, 'UserLogs');
    const documento = doc(col, id);

    deleteDoc(documento);
  }
}
