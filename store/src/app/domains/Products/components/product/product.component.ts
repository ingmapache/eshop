import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../../../Shared/models/product.model';
import { TimeAgoPipe } from '@shared/pipes/timeago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
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
