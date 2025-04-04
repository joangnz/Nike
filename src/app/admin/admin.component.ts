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

  createProductForm: FormGroup;
  deleteProductForm: FormGroup;
  formSubmitted = false;
  message: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.createProductForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(500),
        ],
      ],
      type: ['', [Validators.required]],
      discount: [false],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^.*.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)$|^https?://[a-zA-Z0-9.-]+(?:/[a-zA-Z0-9._%/-]*)*.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)$'
          ),
        ],
      ],
    });
    this.deleteProductForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  getControl(controlName: string) {
    return this.createProductForm.get(controlName);
  }

  submitCreate(): void {
    if (this.createProductForm.valid) {
      this.formSubmitted = false;
      this.productsService.addProduct(this.createProductForm.value);
      console.log(this.createProductForm.value);
    }
  }

  submitDelete(): void {
    if (this.deleteProductForm.valid) {
      this.formSubmitted = false;
      const productId = this.deleteProductForm.value.id;
      
      this.productsService.deleteProduct(productId).subscribe({
        next: () => {
          alert('Producto eliminado correctamente');
          this.deleteProductForm.reset();
        },
        error: (err: Error) => {
          alert('Error al eliminar el producto: ' + err.message);
        }
      });
    }
  }
}
