import { Component, OnInit } from '@angular/core';
import { Person } from './models/Person.model';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  family: Person[];

  constructor() { }

  ngOnInit(): void {
    this.family = [
      {name: "Mary", email:"mary@gmail.com", age:84},
      {name: "John", email:"John@gmail.com", age:74},

    ]
  }

}
