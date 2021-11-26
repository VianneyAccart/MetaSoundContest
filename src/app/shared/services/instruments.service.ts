import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Instrument } from '../models/Instrument.model';

@Injectable({
  providedIn: 'root',
})
export class InstrumentsService {
  private dbPath = '/instruments';

  instrumentsRef: AngularFirestoreCollection<Instrument>;

  constructor(private store: AngularFirestore) {
    this.instrumentsRef = store.collection(this.dbPath);
  }

  // Get all instruments
  getAll(): AngularFirestoreCollection<Instrument> {
    return this.instrumentsRef;
  }

  // Update database with instrument ID and new data
  update(id: string, data: any): Promise<void> {
    return this.instrumentsRef.doc(id).update(data);
  }
}
