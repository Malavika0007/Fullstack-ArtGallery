// app-routing.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserauthComponent } from './userauth/userauth.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { CartComponent } from './cart/cart.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'userauth', component: UserauthComponent }, // Define route for UserAuthComponent
  { path: 'product-details', component: ProductDetailsComponent }, // Remove ':id' from this line
  { path: 'cart', component: CartComponent }, // Add this line for the cart route  
  { path: 'product/:id', component: ViewproductComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
