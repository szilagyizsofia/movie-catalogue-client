import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from "../movie-list/movie-list.component";
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { ActorListComponent } from '../actor-list/actor-list.component';
import { ActorFormComponent } from '../actor-form/actor-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/add',
    component: MovieFormComponent
  },
  {
    path: 'movies/:title',
    component: MovieDetailComponent
  },
  {
    path: 'actors',
    component: ActorListComponent
  },
  {
    path: 'actors/add',
    component: ActorFormComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
