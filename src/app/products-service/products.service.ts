import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:5000/api/products';

  private _products = signal<Product[]>([]);

  get products(): Signal<Product[]> {
    return this._products.asReadonly();
  }

  constructor(private http: HttpClient) {}

  loadProducts(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (data) => this._products.set(data),
      error: (err) => console.error('Error al cargar productos:', err),
    });
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap((newProduct) => {
        this._products.update((products) => [...products, newProduct]);
      })
    );
  }

  deleteProduct(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() =>
          this._products.update((products) =>
            products.filter((product) => product.id !== id)
          )
        )
      );
  }
}
