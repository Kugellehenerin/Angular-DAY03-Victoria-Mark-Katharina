import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class CartService {
  items = [];
  constructor() { }
 
  addToCart(animal) {
    this.items.push(animal);
  }
 
  getItems() {
    return this.items;
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }
 }