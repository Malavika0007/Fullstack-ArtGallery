import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Import AuthService
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css'],
})
export class UserauthComponent {
  showLogin: boolean = true;
  authError: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inject AuthService
  
  signUp(data: any) {
    // Handle signup logic
    this.authService.registerUser(data).subscribe(res => {
      console.log(res);
      // Handle response accordingly
    });
  }
 // constructor(private router: Router) {}

  login(data: any) {
    // Handle login logic
    this.router.navigate(['/']);

  }

  openSignUp() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }
}
