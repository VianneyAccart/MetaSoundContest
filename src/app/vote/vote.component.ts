import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  progressCount: number;
  progressBar: number;

  constructor(){
    this.progressCount = 1;
    this.progressBar = 10;
  }

  ngOnInit(): void {
  }

  // Each time user like/disklike an instrument, progressBar and progressCount increase and fill the bar
  increaseProgressCountBar(): void {
    this.progressCount += 1;
    this.progressBar += 10;
  }
}
