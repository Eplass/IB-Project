import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Events } from './events.model';

@Component({
  selector: 'app-events',
  imports: [NgFor, DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: Events[] = [
    {
      title: 'Summer Fashion Show 2025',
      description: 'A glamorous summer fashion show showcasing the latest trends in clothing and accessories for the season.',
      image: 'assets/fashion/summer-fashion-show.jpg',
      date: '2025-06-15',
      modelCredits: ['Jane Doe', 'Emily Smith', 'Anna Lee']
    },
    {
      title: 'Fall Collection Launch',
      description: 'The launch of our highly anticipated fall collection, featuring bold new looks and elegant designs.',
      image: 'assets/fashion/fall-collection.jpg',
      date: '2025-09-20',
      modelCredits: ['Mark Johnson', 'Olivia Williams', 'Liam Brown']
    },
    {
      title: 'Winter Fashion Extravaganza',
      description: 'A dazzling winter fashion event featuring luxurious coats, scarves, and stylish cold-weather accessories.',
      image: 'assets/fashion/winter-fashion.jpg',
      date: '2025-12-10',
      modelCredits: ['Sophia Davis', 'Ella Moore', 'Lucas Clark']
    }
  ];
}
