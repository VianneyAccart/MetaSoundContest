import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from '../shared/services/instruments.service';

@Component({
  selector: 'app-instruments-vote',
  templateUrl: './instruments-vote.component.html',
  styleUrls: ['./instruments-vote.component.css']
})
export class InstrumentsVoteComponent implements OnInit {

  instruments: any;

  constructor(private instrumentsService: InstrumentsService) {
    this.instruments = this.instrumentsService.instruments;
   }

  ngOnInit(): void {
  }

}
