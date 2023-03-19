import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesService } from 'src/app/core/service/movies.service';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockResponse = {
    Title: 'The Matrix',
    Year: '1999',
    Poster: 'https://www.example.com/the-matrix.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [
        {
          provide: MoviesService,
          useValue: { getMovies: () => of(mockResponse) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
