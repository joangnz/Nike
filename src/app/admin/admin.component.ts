import { Component } from '@angular/core';
import { SITE_URL } from '../app.constants';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  SITE_URL = SITE_URL;
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.productForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productsService.addProduct(this.productForm.value);
      console.log(this.productForm.value);
    }
  }
}
