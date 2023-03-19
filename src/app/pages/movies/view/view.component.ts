import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getSingleMovie } from 'src/app/store/movies/actions';
import { singleMovieSelector } from 'src/app/store/movies/selectors';
import { AppStateInterface } from 'src/app/store/types/appState.interface';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  singleMovie$ = this.appStore.pipe(select(singleMovieSelector));

  id: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private appStore: Store<AppStateInterface>,
    private store: Store,
    private location: Location
  ) {
    this.activatedRoute.params.subscribe((res) => (this.id = res['id']));
  }

  ngOnInit(): void {
    this.store.dispatch(getSingleMovie({ id: `i=${this.id}` }));
  }

  back() {
    this.location.back();
  }
}
