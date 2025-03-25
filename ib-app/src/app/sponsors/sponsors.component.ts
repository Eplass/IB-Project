import { Component } from '@angular/core';
import { Sponsor } from './sponsors.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  imports: [NgFor],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {
  sponsors: Sponsor[] = [
    {
      name: 'TechCorp Inc.',
      image: 'assets/sponsors/techcorp.jpg',
      description: 'TechCorp Inc. is a global leader in AI technology, providing innovative solutions for businesses worldwide.'
    },
    {
      name: 'Green Energy Solutions',
      image: 'assets/sponsors/green-energy.jpg',
      description: 'Green Energy Solutions specializes in renewable energy, striving for a greener and more sustainable future.'
    },
    {
      name: 'NextGen Robotics',
      image: 'assets/sponsors/nextgen-robotics.jpg',
      description: 'NextGen Robotics pioneers autonomous robotic systems for industrial and consumer applications.'
    }
  ];
}
