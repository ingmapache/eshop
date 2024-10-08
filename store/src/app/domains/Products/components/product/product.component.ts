import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../../../Shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler()
  {
    this.addToCart.emit(this.product);
  }
}
