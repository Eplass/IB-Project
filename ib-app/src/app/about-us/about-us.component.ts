import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about-us',
  imports: [
    NgFor,
    HeaderComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'John Doe',
      title: 'CEO & Founder',
      bio: 'John has over 20 years of experience in the industry and is the driving force behind the success of the company. He is passionate about innovation and building strong teams.',
      imageUrl: 'assets/img/john-doe.jpg' // Replace with actual image URLs
    },
    {
      name: 'Jane Smith',
      title: 'CTO',
      bio: 'Jane is a tech enthusiast and expert in software development. She has a knack for solving complex technical problems and leading the tech team to success.',
      imageUrl: 'assets/img/jane-smith.jpg' // Replace with actual image URLs
    },
    {
      name: 'Alice Johnson',
      title: 'Marketing Director',
      bio: 'Alice brings creative strategies to the table and has a wealth of experience in marketing, branding, and communications.',
      imageUrl: 'assets/img/alice-johnson.jpg' // Replace with actual image URLs
    }
  ];

  constructor() { }
}
