import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cartservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default'; // default, user, or seller
  userName: string = ''; // Placeholder for user's name
  cartItems: number = 0; // Placeholder for cart items count
  constructor(private router: Router, private cartService: CartService) {}

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  ngOnInit(): void {
    // Your initialization logic here
    this.cartService.cartItems$.subscribe(items => this.cartItems = items.length);
  }

  userLogout(): void {
    // Logout logic for user
  }
}