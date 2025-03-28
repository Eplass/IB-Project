import { Injectable } from '@angular/core';
import { ItemDetail } from './item-detail/item-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ItemDetail[] = [];

  addItem(item: ItemDetail) {
    this.cartItems.push(item)
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItem(name: string) {
    const index = this.cartItems.findIndex(item => item.name === name);
    if(index !== -1){
      this.cartItems.splice(index, 1);
    }
  }
}