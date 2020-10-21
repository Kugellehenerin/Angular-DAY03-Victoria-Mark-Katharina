import { Component, OnInit } from '@angular/core';
import { pet } from '../app.pet-list';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  animals = pet;
  constructor() { }

  ngOnInit(): void {
  }

}
