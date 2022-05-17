import { Injectable } from '@angular/core';
import { windowWhen } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  url="www.somthing";
  constructor(private userserv: UserServiceService) {
    
    let user = this.userserv.getaddress
    console.log(user);

  }
}
