import { Component, OnInit } from '@angular/core';
import { Instrument } from '../shared/models/Instrument.model';
import { InstrumentsService } from '../shared/services/instruments.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-instruments-vote',
  templateUrl: './instruments-vote.component.html',
  styleUrls: ['./instruments-vote.component.css'],
})
export class InstrumentsVoteComponent implements OnInit {
  instruments?: Instrument[];

  constructor(private instrumentsService: InstrumentsService) {}

  retrieveTutorials(): void {
    this.instrumentsService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            ...c.payload.doc.data(),
            id: c.payload.doc.id,
          }))
        )
      )
      .subscribe((data:any) => {
        this.instruments = data as Instrument[];
      });
  }

  ngOnInit(): void {
    this.retrieveTutorials()
  }

  playInstrumentSound(id: string) {
    console.log(id)
    const audio = new Audio();
    // Return 
    if (this.instruments !== undefined) {
      let index = 0;
      this.instruments.forEach((instrument, indexId) => {
        if (instrument.id === id) {
          index = indexId;
          console.log()
        }
      });
      console.log(index);
      audio.src = this.instruments[index].sound;
      console.log(audio.src);
      audio.load();
      audio.play();
    }
  }
}
