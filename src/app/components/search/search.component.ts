import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { invokeGetMovies } from 'src/app/store/movies/actions';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchGroup = new FormGroup({
    searchField: new FormControl(''),
  });
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.searchGroup.controls.searchField.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((title) => {
        this.store.dispatch(
          invokeGetMovies({ query: `type=${title}&i=tt3896198` })
        );

        // this.searchInformationRequest(term as string);
      });
  }
}
