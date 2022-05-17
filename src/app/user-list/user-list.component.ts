import { Component, OnInit } from '@angular/core';
// import { CompanyNameComponent } from '../company-name/company-name.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private compName:UserServiceService) {
   console.log(this.compName.getCompanyName()) ;
   }

  ngOnInit(): void {
  }

}
