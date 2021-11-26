import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public setDate() {
    localStorage.setItem('date', 'December 1, 2021 12:00:00');
  }
  public getDate() {
    return localStorage.getItem('date');
  }
}
