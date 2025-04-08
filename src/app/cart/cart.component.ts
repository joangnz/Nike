import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  userId = localStorage.getItem('userId') || '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart(this.userId).subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeItem(cartId: string): void {
    this.cartService.removeFromCart(cartId).subscribe(() => {
      this.loadCart();
    });
  }

  updateQuantity(cartId: string, quantity: number): void {
    this.cartService.updateCartItem(cartId, quantity).subscribe(() => {
      this.loadCart();
    });
  }
}
