import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseServerUrl = 'http://localhost:4200'; // Assuming localhost and port 4200

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    // Assuming you have a register endpoint like '/register' on your server
    return this.http.post(`${this.baseServerUrl}/register`, userData);
  }
}
