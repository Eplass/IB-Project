import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgFor,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Elegant Dress',
      price: '$99.99',
      image: 'assets/fashion/elegant-dress.jpg'
    },
    {
      id: 2,
      name: 'Chic Handbag',
      price: '$59.99',
      image: 'assets/fashion/chic-handbag.jpg'
    },
    {
      id: 3,
      name: 'Stylish Heels',
      price: '$79.99',
      image: 'assets/fashion/stylish-heels.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToShop() {
    this.router.navigate(['/shop']);
  }

  readMore() {
    this.router.navigate(['/about']);
  }
}
