import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products-service/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Signal<Product[]>;

  constructor(private productService: ProductsService) {
    this.products = this.productService.loadProducts();
  }

  ngOnInit(): void {
    this.productService.loadProducts();
  }
}
