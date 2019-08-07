
import { Injectable } from '@angular/core';
@Injectable()
export class Apidata {
   constructor() { }
   showTodayDate() {
      let ndate = new Date();
      ndate.getHours();
      return ndate;
   }
}