import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewUser(record) {
    return this.firestore.collection('Messages').add(record);
  }

  read_Users() {
    return this.firestore.collection('Messages', ref => ref.orderBy('date')).snapshotChanges();
  }

  update_User(recordID, record) {
    this.firestore.doc('Messages/' + recordID).update(record);
    console.log('updated');
  }

  delete_User(record_id) {
    this.firestore.doc('Messages/' + record_id).delete();
  }
}