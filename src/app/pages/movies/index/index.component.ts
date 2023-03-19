import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { invokeGetMovies } from 'src/app/store/movies/actions';
import { moviesSelector } from 'src/app/store/movies/selectors';
import { AppStateInterface } from 'src/app/store/types/appState.interface';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  movies$ = this.appStore.pipe(select(moviesSelector));


  private ngUnsubscribe = new Subject();
  constructor(
    private appStore: Store<AppStateInterface>,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(invokeGetMovies({ query: 'i=tt3896198' }));

    
  }

  viewDetails(id: string) {
    this.router.navigateByUrl(`/movies/${id}`);
  }

  public ngOnDestroy() {
    // Remove event handlers
    this.ngUnsubscribe.complete();
  }
}
