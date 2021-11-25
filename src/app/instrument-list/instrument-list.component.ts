import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

  instruments: Observable<any[]>;

  constructor(store: AngularFirestore) {
    this.instruments = store.collection('instruments').valueChanges();
  }

  ngOnInit(): void {
  }

}
