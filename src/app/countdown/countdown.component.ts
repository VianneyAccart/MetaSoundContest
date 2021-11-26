import { Component } from '@angular/core';
import { DateService } from '../shared/services/date.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent {
  demo: any;
  days: number | undefined;
  hours: number | undefined;
  mins: number | undefined;
  secs: number | undefined;

  futurDate: number;
  date: any;
  constructor(private dateService: DateService) {
    this.date = this.dateService.getDate();
    this.futurDate = new Date(this.date).getTime();
  }

  x = setInterval(() => {
    const today = new Date().getTime();

    if (this.futurDate !== null) {
      const distance = (this.futurDate as any) - (today as any);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      this.demo = days + ' days, ' + hours + ' hours, ' + mins + ' minutes';

      if (distance < 0) {
        clearInterval(this.x);
        this.demo = 'Vote is closed';
      }
    }
  }, 1000);
}
