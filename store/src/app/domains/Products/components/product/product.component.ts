import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;

  @Output() addToCart = new EventEmitter();

  addToCartHandler()
  {
    this.addToCart.emit('Hola, huevos pto');
  }
}
