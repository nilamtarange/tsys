import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priya',
  templateUrl: './priya.component.html',
  styleUrls: ['./priya.component.css']
})
export class PriyaComponent implements OnInit {
  mydata: any;
  constructor(private myhttp: HttpClient) {
  }

  ngOnInit(): void {
    console.log("hii nilam")
    this.myhttp.get('https://reqres.in/api/users/2').subscribe
      (
        (mycode) => { this.mydata = mycode }
      )
  }

}
