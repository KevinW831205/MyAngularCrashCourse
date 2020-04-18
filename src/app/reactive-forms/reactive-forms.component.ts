import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  //manual creating the form group
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl(''),
    contactInfo: new FormGroup({
      email: new FormControl('intialized Value'),
      phone: new FormControl('')
    })
  })

  // form: FormGroup;    // with form builder

  constructor(fb: FormBuilder) {
    // this.form = fb.group({
    //   username: ['',Validators.required],
    //   password: ['']
    // })

  }

  ngOnInit() {

  }

  get username() {
    return this.form.get('username').value;
  }






}
