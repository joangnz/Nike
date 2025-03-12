import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<Product[]>([]);

  addProduct(product: Product): void {
    this.products.update((products) => [...this.products(), product]);
  }

  getProducts(): Signal<Product[]> {
    return this.products;
  }
}
