import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [NgFor],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events = [
    { name: 'Angular Conference', date: '2025-06-15', location: 'New York, USA' },
    { name: 'Web Development Summit', date: '2025-09-10', location: 'San Francisco, USA' },
    { name: 'JavaScript Meetup', date: '2025-11-22', location: 'London, UK' }
  ];
}
