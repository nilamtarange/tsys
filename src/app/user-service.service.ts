import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() {

  }

  getaddress() {
    let address = {
      area: 'baner',
      pincode: 3031,
      locality: 'tower'
    };

  }

  getCompanyName() {
    return 't-system';
  }



}



