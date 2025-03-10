import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products = signal<Product[]>([]);

  get products(): Signal<Product[]> {
    return this._products.asReadonly();
  }

  loadProducts(): Signal<Product[]> {
    return this._products;
  }

  addProduct(product: Product): void {
    this._products.update((products) => [...products, product]);
  }
}
