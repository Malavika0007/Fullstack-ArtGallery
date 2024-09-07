import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product-details/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = []; // Array to store cart items
  private cartItemsSubject = new BehaviorSubject<Product[]>([]); // BehaviorSubject to emit cart items
  cartItems$ = this.cartItemsSubject.asObservable(); // Observable to subscribe to cart items changes

  addToCart(product: Product): void {
    this.items.push(product); // Add the product to the cart items array
    this.cartItemsSubject.next([...this.items]); // Emit the updated cart items
  }

  getItems(): Product[] {
    return this.cartItemsSubject.getValue(); // Use getValue() to get current cart items
  }

  clearCart(): void {
    this.items = []; // Clear the cart items array
    this.cartItemsSubject.next([...this.items]); // Emit the updated cart items
  }

  getCartItemCount(): number {
    return this.items.length; // Return the number of items in the cart
  }
}