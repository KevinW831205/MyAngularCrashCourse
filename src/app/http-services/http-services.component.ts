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

  persons: Person[];

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
    //pessimistic
    this.personService.post(new Person(0, "asdf", "lkjh"))
      .subscribe(
        res => {
          this.persons.push(res)
          console.log(res);
        },
        err => {

        }
      )
  }

  changeFirstName(person) {
    // optimistic
    let temp = person.firstName;
    person.firstName = "updated"
    this.personService.put(person)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          person.firstName = temp;
        }
      )
  }

  deletePerson(id){
    this.personService.delete(id)
      .subscribe(res=>{
        let index = this.persons.indexOf(res);
        this.persons.splice(index,1)
      },
      err=>{
        console.log(err);
      })
  }

  handleErrors(error){

  }

}
