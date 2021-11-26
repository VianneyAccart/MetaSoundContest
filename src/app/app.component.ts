import { Component } from '@angular/core';
import { DateService } from './shared/services/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Meta Sound Contest';

  // Used to set an expiration countdown date
  constructor(private dateService: DateService) {
    this.dateService.setDate();
  }
}
