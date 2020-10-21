import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pet } from '../app.pet-list';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  animal;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(animal) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(animal);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.animal = pet[+params.get('petId')];
    });
  }
}
