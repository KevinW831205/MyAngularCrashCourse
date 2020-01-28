import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonService } from '../service/person.service';
import { Person } from './model/Person';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent implements OnInit {

  persons;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    console.log("init")
    this.personService.getAll()
      .subscribe(res => {
        this.persons = res;
        console.log("person", this.persons)
      });
  }

  createPerson() {
    this.personService.post(new Person(0, "asdf", "lkjh"))
      .subscribe(res => {
        this.persons.push(res)
        console.log(res);
      })
  }

  changeFirstName(person){
    this.personService.put()
  }

}
