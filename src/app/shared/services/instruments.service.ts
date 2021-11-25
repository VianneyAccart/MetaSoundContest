import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  instruments: any;

  constructor(store: AngularFirestore) {
    store.collection('instruments').valueChanges().subscribe(response => {
      this.instruments = response;
    })
  }
}
