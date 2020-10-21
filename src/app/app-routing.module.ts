import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {
    path: "", component: PetListComponent
  },
  {
    path: 'pets/:petId', component: PetDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
