import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InstrumentsService } from '../shared/services/instruments.service';

@Component({
  selector: 'app-instruments-rank',
  templateUrl: './instruments-rank.component.html',
  styleUrls: ['./instruments-rank.component.css']
})
export class InstrumentsRankComponent implements OnInit {

  instruments: Observable<any[]>;

  constructor(private instrumentsService: InstrumentsService) {
    this.instruments = this.instrumentsService.instruments;
    console.log(this.instruments);
   }

  ngOnInit(): void {
  }

}
