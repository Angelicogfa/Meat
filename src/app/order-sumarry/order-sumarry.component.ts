import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-sumarry',
  templateUrl: './order-sumarry.component.html',
})
export class OrderSumarryComponent implements OnInit {

  rated: boolean;

  constructor() { }

  ngOnInit() {
  }

  rate(){
    this.rated = true;
  }

}
