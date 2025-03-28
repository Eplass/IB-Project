import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  imports: [
    NgIf,
    NgClass,
    DatePipe
  ],
  schemas: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountDownComponent implements OnInit {
  targetDate: string = '2025-10-05';
  daysLeft: number = 0;
  showImage: boolean = false;

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.updateCountdown();
  }

  updateCountdown() {
    const target = new Date(this.targetDate).getTime();
    const today = new Date().getTime();
    const difference = target - today;
    this.daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  }
  
  toggleDisplay() {
    this.showImage = !this.showImage;
  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }
}
