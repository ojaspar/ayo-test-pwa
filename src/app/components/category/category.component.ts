import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  icons: { emoji: any; type: string }[] = [
    {
      emoji: '😂',
      type: 'Comedy',
    },
    {
      emoji: '😍',
      type: 'Romance',
    },
    {
      emoji: '😊',
      type: 'Drama',
    },
    {
      emoji: '😳',
      type: 'Horror',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
