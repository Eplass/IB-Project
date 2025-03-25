import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FashionItem } from './fashion-item.model';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    NgFor, 
    RouterLink,
    HeaderComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  fashionItems: FashionItem[] = [
    {
      title: 'Elegant Evening Dress',
      description: 'An elegant evening dress perfect for a night out or formal event.',
      image: 'assets/fashion/evening-dress.jpg',
      link: '/shop/evening-dress'
    },
    {
      title: 'Summer Collection',
      description: 'Light and breezy summer outfits designed for comfort and style.',
      image: 'assets/fashion/summer-collection.jpg',
      link: '/shop/summer-collection'
    },
    {
      title: 'Luxury Watches',
      description: 'A collection of luxurious watches, blending fashion with functionality.',
      image: 'assets/fashion/luxury-watches.jpg',
      link: '/shop/luxury-watches'
    },
    {
      title: 'Casual Streetwear',
      description: 'Casual and trendy streetwear, perfect for everyday fashion.',
      image: 'assets/fashion/streetwear.jpg',
      link: '/shop/streetwear'
    }
  ];
}
