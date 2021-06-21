import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewDocument(record) {
    return this.firestore.collection('Documents').add(record);
  }

  read_Documents() {
    return this.firestore.collection('Documents').snapshotChanges();
  }

  update_Document(recordID, record) {
    this.firestore.doc('Documents/' + recordID).update(record);
    console.log('updated');
  }

  delete_Document(record_id) {
    this.firestore.doc('Documents/' + record_id).delete();
  }
}