import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent {
  progressBar: number;

  constructor() {
    this.progressBar = 0;
  }

  // Each time user like/disklike an instrument, progressBar and progressCount increase and fill the bar
  receiveProgressBarEvolution(event: any): void {
    this.progressBar += event;
  }
}
