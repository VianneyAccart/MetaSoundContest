import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  instruments: Observable<any[]>;

  constructor(store: AngularFirestore) {
    this.instruments = store.collection('instruments').valueChanges();
  }
}
