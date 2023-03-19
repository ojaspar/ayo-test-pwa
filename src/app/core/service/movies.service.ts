import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

abstract class AbstractMovies {
  abstract getMovies(query: string): Observable<any>;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService implements AbstractMovies {
  private baseUrl: string = environment.url;
  private api: string = environment.apiKey;
  constructor(private http: HttpClient) {}

  getMovies(query: string = '') {
    // added a specific query because without it i get an invalid id
    return this.http.get<any>(`${this.baseUrl}?${query}&apiKey=${this.api}`);
  }
}
