import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product-details/product';
import { CartService } from '../services/cartservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  staticProducts:Product[]=[ {
    id: 1,
    name: 'Product 1 (Painting)',
    description: '...',
    price: 19.99,
    imageUrl: '/assets/art1.jpg',
    category: 'Painting',
    wikiLink: 'https://en.wikipedia.org/wiki/Art'
  },
  {
    id: 5,
    name: 'Product 5 (Sculpture)',
    description: '...',
    price: 159.99,
    imageUrl: '/assets/sculpture2.jpeg',
    category: 'Sculpture',
    wikiLink:'https://en.wikipedia.org/wiki/Stone_sculpture'
  },]

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }
  onCheckoutClick() {
    // Handle checkout functionality based on your implementation

    // Option 1: Simulate checkout process and display confirmation:
    console.log('Checkout clicked! Simulating processing...');
    setTimeout(() => {
      alert('Checkout successful!');
    }, 2000); // Simulate processing time

    // Option 2: Navigate to a dedicated checkout page (if applicable):
    // this.router.navigate(['/checkout']); // Replace with actual checkout route
  }
}