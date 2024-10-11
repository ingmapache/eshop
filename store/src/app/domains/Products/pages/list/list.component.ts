import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { product } from '@shared/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductServiceService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  private cartService = inject(CartService);
  private productService = inject(ProductServiceService);
  private categoryService = inject(CategoryService);

  products = signal<product[]>([]);
  categories = signal<category[]>([]);

  @Input() category_id? : string;
  
  constructor()
  {}

  ngOnInit()
  {
    this.getAllCategories();
  }

  ngOnChanges(changes: SimpleChanges)
  {
      this.getAllProducts();
  
  }

  addToCart(product: product)
  {
    this.cartService.addToCart(product);
  }

  private getAllProducts()
  {
    this.productService.getProductsByCategory(this.category_id)
      .subscribe({
        next: (products) => {
          this.products.set(products);
        }
      });
  };

  private getAllCategories()
  {
    this.categoryService.getAll()
      .subscribe({
        next: (categories) => {
          this.categories.set(categories);
        }
      });
  };
}
