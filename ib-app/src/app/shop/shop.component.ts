import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ShopItem } from './shop.model';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-shop',
  imports: [
    NgFor,
    HeaderComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements AfterViewInit, OnDestroy {

  items: ShopItem[] = [
    { id: 1, name: 'Smartphone', price: 699, image: 'assets/items/smartphone.jpg' },
    { id: 2, name: 'Headphones', price: 199, image: 'assets/items/headphones.jpg' },
    { id: 3, name: 'Laptop', price: 1299, image: 'assets/items/laptop1.jpg' }
  ];

  @ViewChildren('itemElement') itemElements!: QueryList<ElementRef>;
  private eventListeners: (() => void)[] = [];

  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.itemElements.forEach((itemElement, index) => {
      const item = this.items[index];
      // console.log(item);
      const listener = this.renderer.listen(itemElement.nativeElement, 'mousedown', () => this.viewItem(item.id));
      this.eventListeners.push(listener);
    });
  }

  ngOnDestroy() {
    this.eventListeners.forEach(unlisten => unlisten());
  }

  viewItem(id: number) {
    console.log('Navigating to item:', id);
    this.router.navigate(['/item', id]);
  }
}
