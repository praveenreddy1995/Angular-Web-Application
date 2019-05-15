
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class Apidata {
    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();
   constructor() { }
   showTodayDate() {
      let ndate = new Date();
      ndate.getHours();
      return ndate;
   }
   changeMessage(message: string) {
      this.messageSource.next(message)
    }
}