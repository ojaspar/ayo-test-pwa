import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovies } from 'src/app/store/movies/types/index.type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie = {} as IMovies;
  constructor() {}

  ngOnInit(): void {}
}
