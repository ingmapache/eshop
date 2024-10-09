import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { product } from '@shared/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductServiceService } from '@shared/services/product.service';

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
