import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text: String = "text is from property in component";
  imgUrl= "https://via.placeholder.com/150";
  someBoolean: boolean = false;
  someField: String = "Two Way Binding";

  someDate = new Date();

  clicking(e){
    console.log(e);
  }

  onKeyUp() {
    console.log(this.someField)
  }


}
