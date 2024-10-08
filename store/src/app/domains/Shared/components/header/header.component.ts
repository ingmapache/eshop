import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  @Input() cart: product[] = [];

  total = signal(0);

  toggleSideMenu()
  {
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChanges)
  {
    const cart = changes['cart'];
    if(cart)
    {
      this.total.set(this.getTotalPrice());
    }
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  

}
