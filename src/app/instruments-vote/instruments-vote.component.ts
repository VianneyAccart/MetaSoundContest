import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  progress: any;

  @Output() progressBar: EventEmitter<any> = new EventEmitter;

  constructor(private instrumentsService: InstrumentsService) {
    this.progress = 0;
  }

  // Send a value to vote component to increase progress bar
  sendProgressBarEvolution() {
    this.progressBar.emit(this.progress);
  }

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
      .subscribe((data: any) => {
        this.instruments = data as Instrument[];
      });
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  playInstrumentSound(id: string) {
    const audio = new Audio();
    if (this.instruments !== undefined) {
      let index = 0;
      this.instruments.forEach((instrument, indexId) => {
        if (instrument.id === id) {
          index = indexId;
        }
      });
      audio.src = this.instruments[index].sound;
      audio.load();
      audio.play();
    }
  }

  increaseScore(id: string): void {
    if (this.instruments !== undefined) {
      let index = 0;
      this.instruments.forEach((instrument, indexId) => {
        if (instrument.id === id) {
          index = indexId;
        }
      });
      let score = (this.instruments[index].score += 1);
      const updatedScore = {
        score: score,
      };
      this.instrumentsService
        .update(id, updatedScore)
        .catch((err) => console.log(err));
    }
    this.progress += 10;
    this.sendProgressBarEvolution()
    this.progress = 0;
  }

  decreaseScore(id: string): void {
    if (this.instruments !== undefined) {
      let index = 0;
      this.instruments.forEach((instrument, indexId) => {
        if (instrument.id === id) {
          index = indexId;
        }
      });
      let score = (this.instruments[index].score -= 1);
      const updatedScore = {
        score: score,
      };
      this.instrumentsService
        .update(id, updatedScore)
        .catch((err) => console.log(err));
    }
    this.progress += 10;
    this.sendProgressBarEvolution()
    this.progress = 0;
  }
}
