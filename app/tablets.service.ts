// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

//above or in app.module.ts:
// providers: [
//  TabletsService
// ],
export class TabletsService {
  getTablets()
  {
      return ["Samsung Galaxy","Apple iPad","Huawei MediaPad"];
  }
  

  constructor() { }
}
