import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from 'src/app/store/movies/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from 'src/app/store/movies/effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoviesComponent, IndexComponent, ViewComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    CategoryComponent,
    CardComponent,
    RouterModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class MoviesModule {}
