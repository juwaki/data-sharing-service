import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private inbox = new BehaviorSubject(false);
  inboxMessage = this.inbox.asObservable();

  private calendar = new BehaviorSubject(false);
  calendarMessage = this.calendar.asObservable();

  private weather = new BehaviorSubject(false);
  weatherMessage = this.weather.asObservable();

  

  constructor() { }


  inboxData(status: boolean) {
    this.inbox.next(status)
  }

  weatherData(status: boolean) {
    this.weather.next(status)
  }


  calendarData(status: boolean) {
    this.calendar.next(status)
  }

  


  
}
