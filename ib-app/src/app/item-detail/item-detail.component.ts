import { Component, OnInit } from '@angular/core';
import { ItemDetail } from './item-detail.model';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-item-detail',
  imports: [CarouselComponent],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {
  item!: ItemDetail;
  items: ItemDetail[] = [
    { id: 1, name: 'Smartphone', description: 'A high-end smartphone.', price: '$699', images: ['assets/items/smartphone.jpg', 'assets/items/smartphone1.jpg', 'assets/items/smartphone2.jpg', 'assets/items/smartphone3.jpg'] },
    { id: 2, name: 'Headphones', description: 'Noise-canceling headphones.', price: '$199', images: ['assets/items/headphones.jpg', 'assets/items/headphones1.jpg', 'assets/items/headphones2.jpg'] },
    { id: 3, name: 'Laptop', description: 'A powerful laptop.', price: '$1299', images: ['assets/items/laptop.jpg', 'assets/items/laptop1.jpg', 'assets/items/laptop2.jpg'] }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.items.find(item => item.id === id)!;
  }

  addToCart() {
    alert(`${this.item.name} has been added to your cart!`);
  }
}
