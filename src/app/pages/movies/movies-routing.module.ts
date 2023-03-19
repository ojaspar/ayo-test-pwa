import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MoviesComponent } from './movies.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: ':id',
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
