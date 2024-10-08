import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { product } from '../../../Shared/models/product.model';
import { HeaderComponent } from "../../../Shared/components/header/header.component";
import { CartService } from '../../../Shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  private cartService = inject(CartService);

  products = signal<product[]>([]);
  
  
  constructor()
  {
    const initProducts: product[] = 
    [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 230,
        image: 'https://picsum.photos/640/640?r=21',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 102,
        image: 'https://picsum.photos/640/640?r=11',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 189,
        image: 'https://picsum.photos/640/640?r=31',
        createdOn: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: product)
  {
    this.cartService.addToCart(product);
  }
}
