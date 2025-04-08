import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../interfaces/product';
import { ProductsService } from '../products-service/products.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Signal<Product[]>;

  constructor(
    public productsService: ProductsService,
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.products = this.productsService.products;
    this.productsService.loadProducts();
  }

  trackByName(index: number, product: Product): string {
    return product.name;
  }

  addToCart(productId: string): void {
    const userId = this.authService.getUserId();
    if (!userId) {
      console.error('User ID not found. Please log in.');
      alert('You must be logged in to add items to the cart.');
      return;
    }

    console.log('Adding to cart:', { productId, userId });
    this.cartService.addToCart(userId.toString(), productId, 1).subscribe({
      next: () => alert('Product added to cart!'),
      error: (err) => console.error('Error adding to cart:', err),
    });
  }
}
