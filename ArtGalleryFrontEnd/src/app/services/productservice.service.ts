import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product-details/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cartItems: Product[] = [];
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1 (Painting)',
      description: '...',
      price: 19.99,
      imageUrl: '/assets/logo.jpg',
      category: 'Painting'
    },
    {
      id: 2,
      name: 'Product 2 (Sculpture)',
      description: '...',
      price: 99.99,
      imageUrl: '/assets/sculpture1.jpeg',
      category: 'Sculpture'
    },
    // ... add more products with categories
    {
      id: 3,
      name: 'Product 3 (Drawing)',
      description: '...',
      price: 75.89,
      imageUrl: '/assets/drawing1.jpeg',
      category: 'Drawing'
    },
    {
      id: 4,
      name: 'Product 4 (Painting)',
      description: '...',
      price: 49.99,
      imageUrl: '/assets/art.jpeg',
      category: 'Painting'
    },
    {
      id: 5,
      name: 'Product 5 (Sculpture)',
      description: '...',
      price: 159.99,
      imageUrl: '/assets/sculpture2.jpeg',
      category: 'Sculpture'
    },
    {
      id: 6,
      name: 'Product 6 (Drawing)',
      description: '...',
      price: 49.99,
      imageUrl: '/assets/drawing2.jpeg',
      category: 'Drawing'
    },
    // Add more products here
  ];

  constructor() { }

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getProducts(): Observable<Product[]> {
    // Simulate an asynchronous operation by returning an observable with a delay
    return of(this.products); // Use 'of' to convert the products array into an observable
  }
}
