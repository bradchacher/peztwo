import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Form } from '../model/Form';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  formsCollection : AngularFirestoreCollection<Form>;
  formDoc: AngularFirestoreDocument<Form>;
  forms: Observable<Form[]>;
  form: Observable<Form>;


  constructor( private afs: AngularFirestore) {
    this.formsCollection = this.afs.collection('forms',
    ref => ref.orderBy('lastName', 'asc'));
   }

   getForms(): Observable<Form[]> {
     this.forms = this.formsCollection.snapshotChanges().pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Form;
         data.id = action.payload.doc.id;
         return data;
       });
     }));
     return this.forms;
   }

   newClient(form: Form) {
    this.formsCollection.add(form);
  }
}
