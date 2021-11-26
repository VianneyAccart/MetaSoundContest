import { Component } from '@angular/core';
import { Instrument } from '../shared/models/Instrument.model';
import { InstrumentsService } from '../shared/services/instruments.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-instruments-rank',
  templateUrl: './instruments-rank.component.html',
  styleUrls: ['./instruments-rank.component.css'],
})
export class InstrumentsRankComponent {
  instruments?: Instrument[]; // List of instruments get from service

  constructor(private instrumentsService: InstrumentsService) {}

  // Used to get instruments from service
  retrieveInstruments(): void {
    this.instrumentsService
      // Methods from AngularFirestoreCollection
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            ...c.payload.doc.data(),
            // Get collection ID
            id: c.payload.doc.id,
          }))
        )
      )
      // Put instruments in instruments
      .subscribe((data: any) => {
        this.instruments = data as Instrument[];
        // Sort instruments list by score. Useful for leaderboard display
        this.instruments.sort((a: any, b: any) => b.score - a.score);
      });
  }

  // Get instruments during component init
  ngOnInit(): void {
    this.retrieveInstruments();
  }

  // Used for play each instrument sound thanks to its ID
  playInstrumentSound(id: string) {
    const audio = new Audio();
    // *** Code to get ID
    if (this.instruments !== undefined) {
      let index = 0;
      this.instruments.forEach((instrument, indexId) => {
        if (instrument.id === id) {
          index = indexId;
        }
      }); // End of code to get ID ***
      audio.src = this.instruments[index].sound;
      audio.load();
      audio.play();
    }
  }
}
