import { Component, inject, Input, signal, } from '@angular/core';
import { product } from '@shared/models/product.model';
import { ProductServiceService } from '@shared/services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id? : string;

  private productService = inject(ProductServiceService);
  private cartService = inject(CartService);

  product = signal<product | null>(null);
  coverImg = signal('');

  ngOnInit()
  {
    if(this.id)
    {
      this.productService.getOneProduct(this.id)
        .subscribe({
          next: (product) => {
            this.product.set(product);

            if (product.images.length > 0)
            {
              this.coverImg.set(product.images[0])
            }
          }
        })
    }
  }

  changeCover(newImg: string)
  {
    this.coverImg.set(newImg)
  }

  addToCart()
  {
    const product = this.product();
    if (product)
    {
      this.cartService.addToCart(product);
    }

    
  }
}
