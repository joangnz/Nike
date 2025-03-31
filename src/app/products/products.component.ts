import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Signal<Product[]>;

  constructor(public productsService: ProductsService) {
    this.products = this.productsService.products;
    this.productsService.loadProducts();
  }

  trackByName(index: number, product: Product): string {
    return product.name;
  }
}
