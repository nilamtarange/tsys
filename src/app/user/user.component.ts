import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   myapidata: any;
  constructor(private myhttp: HttpClient) {

  }
     
  ngOnInit(): void {
    console.log("I am in session")
    this.myhttp.get('https://reqres.in/api/users?page=1')
    .subscribe(
      (mydata)=>{this.myapidata=mydata}
    );


  }

}
