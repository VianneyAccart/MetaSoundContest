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
  progress: any; // Used to allow progressbar evolution
  hiddenInstruments: string[]; // Used when user like/dislike an instrument
  endMessage: boolean = false; // Message displayed when vote is ended

  // Send progress value to parent for right displaying of progressbar
  @Output() progressBar: EventEmitter<any> = new EventEmitter();

  constructor(private instrumentsService: InstrumentsService) {
    this.progress = 0;
    this.hiddenInstruments = [];
  }

  // Send a value to vote component to increase progress bar
  sendProgressBarEvolution() {
    this.progressBar.emit(this.progress);
  }

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

  // When user click on like button, score is increased by 1
  increaseScore(id: string): void {
    // When done, current instrument is hidden
    this.hideInstrument(id);
    // Code used to get current instrument ID
    if (this.instruments !== undefined) {
      let index = 0;
      this.instruments.forEach((instrument, indexId) => {
        if (instrument.id === id) {
          index = indexId;
        }
        // When vote is ended, set a boolean which allow thanks message display
        if (index === 9) this.endMessage = true;
      });
      // Score is increased by 1
      let score = (this.instruments[index].score += 1);
      // Creation of an object needed in update() method
      const updatedScore = {
        score: score,
      };
      // Update the score for the current ID instrument
      this.instrumentsService
        .update(id, updatedScore)
        // If effor, display the error
        .catch((err) => console.log(err));
    }
    // Progress evolve by 10, data is sent to parent, and progress is reset
    this.progress += 10;
    this.sendProgressBarEvolution();
    this.progress = 0;
  }

  // When user click on like button, score is decreased by 1
  decreaseScore(id: string): void {
    // When done, current instrument is hidden
    this.hideInstrument(id);
    // Code used to get current instrument ID
    if (this.instruments !== undefined) {
      let index = 0;
      this.instruments.forEach((instrument, indexId) => {
        if (instrument.id === id) {
          index = indexId;
        }
        // When vote is ended, set a boolean which allow thanks message display
        if (index === 9) this.endMessage = true;
      });
      // Score is decreased by 1
      let score = (this.instruments[index].score -= 1);
      // Update the score for the current ID instrument
      const updatedScore = {
        score: score,
      };
      // Update the score for the current ID instrument
      this.instrumentsService
        .update(id, updatedScore)
        // If effor, display the error
        .catch((err) => console.log(err));
    }
    // Progress evolve by 10, data is sent to parent, and progress is reset
    this.progress += 10;
    this.sendProgressBarEvolution();
    this.progress = 0;
  }
  // Used to hide an instrument after user click on like/dislike
  hideInstrument(id: string) {
    this.hiddenInstruments.push(id);
  }
}
