import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  // Set a expiration countdown date
  setDate() {
    localStorage.setItem('date', 'December 1, 2021 12:00:00');
  }
  // Get current date
  getDate() {
    return localStorage.getItem('date');
  }
}
