import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  numbers;

  constructor() { }

  ngOnInit() {
  }

  removeNumbers(){
    this.numbers = null;
  }

  populateNumbers(){
    this.numbers = [1,2,3,4,5,6]
  }

}
