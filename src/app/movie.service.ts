import { Injectable } from '@angular/core';
import { Movie } from "./movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {
      title: 'Titanic',
      genre: 'drama',
      director: 'James Cameron',
      actor: 'Leonardo DiCaprio',
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      releaseDate: '1997',
      review: 'good'
    },
    {
      title: 'Fight Club',
      genre: 'drama',
      director: 'David Fincher',
      actor: 'Brad Pitt',
      description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      releaseDate: '1999',
      review: 'interesting'
    }
  ];
  
  constructor() { }
  
  getMovies() {
    return this.movies;
  }
  
  getMovie(title) {
    return this.movies.find(i => i.title == title);
  }
}
