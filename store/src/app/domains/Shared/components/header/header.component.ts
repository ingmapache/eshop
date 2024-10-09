import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private cartService = inject(CartService);
  hideSideMenu = signal(true);
  total = this.cartService.total;
  cart = this.cartService.cart;

  toggleSideMenu()
  {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
