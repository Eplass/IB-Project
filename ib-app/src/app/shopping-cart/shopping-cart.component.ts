import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ItemDetail } from '../item-detail/item-detail.model';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    NgFor,
    NgIf,
    ItemDetailComponent
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {


  cartItems: ItemDetail[] = [];
  showDropdown = false;
  itemCount = 1;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  addItem(item: ItemDetail) {
    this.cartItems.push(item);
    this.itemCount++;
  }
}
