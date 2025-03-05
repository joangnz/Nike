import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products = signal<Product[]>([]);

  get products(): Signal<Product[]> {
    return this._products.asReadonly();
  }

  constructor(private http: HttpClient) {}

  loadProducts(): Signal<Product[]> {
    return this._products;
  }

  addProduct(product: Product): void {
    this._products.update((products) => [...products, product]);
  }
}
