import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InstrumentsService } from '../shared/services/instruments.service';

@Component({
  selector: 'app-instruments-vote',
  templateUrl: './instruments-vote.component.html',
  styleUrls: ['./instruments-vote.component.css']
})
export class InstrumentsVoteComponent implements OnInit {

  instruments: Observable<any[]>;

  constructor(private instrumentsService: InstrumentsService) {
    this.instruments = this.instrumentsService.instruments;
    console.log(this.instruments);
   }

  ngOnInit(): void {
  }

}
