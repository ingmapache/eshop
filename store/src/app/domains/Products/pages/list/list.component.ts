import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { product } from '../../../Shared/models/product.model';
import { HeaderComponent } from "../../../Shared/components/header/header.component";
import { CartService } from '../../../Shared/services/cart.service';
import { ProductServiceService } from '../../../Shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  private cartService = inject(CartService);
  private productService = inject(ProductServiceService);

  products = signal<product[]>([]);
  
  
  constructor()
  {}

  ngOnInit()
  {
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products.set(products);
        }
      })
  }

  addToCart(product: product)
  {
    this.cartService.addToCart(product);
  }
}
