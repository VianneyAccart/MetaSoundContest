import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from '../shared/services/instruments.service';

@Component({
  selector: 'app-instruments-rank',
  templateUrl: './instruments-rank.component.html',
  styleUrls: ['./instruments-rank.component.css']
})
export class InstrumentsRankComponent implements OnInit {

  instruments: any;
  scores: number[];

  constructor(private instrumentsService: InstrumentsService) {
    this.scores = new Array();
    this.instruments = this.instrumentsService.instruments;
    this.instruments.forEach((instrument: any) => {
      this.scores.push(instrument.score);
    });
   }

  ngOnInit(): void {
  }

}
