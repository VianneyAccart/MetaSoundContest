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
}
