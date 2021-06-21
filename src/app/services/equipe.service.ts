import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewEquipe(record) {
    return this.firestore.collection('Equipes').add(record);
  }

  read_Equipes() {
    return this.firestore.collection('Equipes').snapshotChanges();
  }

  update_Equipe(recordID, record) {
    this.firestore.doc('Equipes/' + recordID).update(record);
    console.log('updated');
  }

  delete_Equipe(record_id) {
    this.firestore.doc('Equipes/' + record_id).delete();
  }
}