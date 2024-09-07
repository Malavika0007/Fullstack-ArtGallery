import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CartService } from '../services/cartservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cartItems:number=0;
  products: Product[] = [ // Mock data with categories
  {
    id: 1,
    name: 'Product 1 (Painting)',
    description: '...',
    price: 19.99,
    imageUrl: '/assets/art1.jpg',
    category: 'Painting',
    wikiLink: 'https://en.wikipedia.org/wiki/Art'
  },
  {
    id: 2,
    name: 'Product 2 (Sculpture)',
    description: '...',
    price: 99.99,
    imageUrl: '/assets/sculpture1.jpeg',
    category: 'Sculpture',
    wikiLink:'https://en.wikipedia.org/wiki/Sculpture'
  },
  // ... add more products with categories
  {
    id: 3,
    name: 'Product 3 (Drawing)',
    description: '...',
    price: 75.89,
    imageUrl: '/assets/drawing1.jpg',
    category: 'Drawing',
    wikiLink:'https://en.wikipedia.org/wiki/Drawing'
  },
  {
    id: 4,
    name: 'Product 4 (Painting)',
    description: '...',
    price: 49.99,
    imageUrl: '/assets/art2.jpg',
    category: 'Painting',
    wikiLink:'https://en.wikipedia.org/wiki/Fine_art'
  },
  {
    id: 5,
    name: 'Product 5 (Sculpture)',
    description: '...',
    price: 159.99,
    imageUrl: '/assets/sculpture2.jpeg',
    category: 'Sculpture',
    wikiLink:'https://en.wikipedia.org/wiki/Stone_sculpture'
  },
  {
    id: 6,
    name: 'Product 6 (Drawing)',
    description: '...',
    price: 49.99,
    imageUrl: '/assets/drawing2.jpeg',
    category: 'Drawing',
    wikiLink:'https://en.wikipedia.org/wiki/Pencil_drawing'
  },
    // Add more products with categories
  ];
  selectedCategory: string = ''; // Initialize selected category
  categories: string[] = []; // Array to store unique categories

  constructor(private cartService: CartService) {}
  
  redirectToWiki(wikiLink: string | undefined): void {
    if (wikiLink) {
      window.open(wikiLink, '_blank');
    } else {
      console.error('Wikipedia link is not available for this product.');
    }
  }
  

  ngOnInit(): void {
    // Extract unique categories from mock data and filter out undefined values
    this.categories = Array.from(new Set(this.products.map(p => p?.category)))
                          .map(c => c || '') // Replace undefined with empty string
                          .filter(c => c !== '') // Filter out empty strings
                          .sort();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product); // Add product to cart
    this.cartItems = this.cartService.getItems().length; // Update cart count
    window.alert(`${product.name} has been added to your cart.`);
    // Optionally, provide feedback to the user (e.g., display a toast message)
  }
  get filteredProducts(): Product[] {
    if (this.selectedCategory === '') {
      return this.products; // Return all products if no category selected
    } else {
      return this.products.filter(product => product.category === this.selectedCategory);
    }
  }
}
