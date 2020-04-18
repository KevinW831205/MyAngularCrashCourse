import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  //manual creating the form group

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

}
