import { computed, Injectable, signal } from '@angular/core';
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = signal<product[]>([]);
  
  addToCart(product: product)
  {
    this.cart.update(prevState => [...prevState, product]);
  }

  total = computed(() => 
  {
    const cart = this.cart()
    const cartTotal = cart.reduce((total, product) => total + product.price, 0);
    return cartTotal + " $";
  })
}
