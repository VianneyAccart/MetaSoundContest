import { Component } from '@angular/core';
import { DateService } from './shared/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'meta-sound-contest';
  constructor(private dateService: DateService) {
    this.dateService.setDate();
  }
}
