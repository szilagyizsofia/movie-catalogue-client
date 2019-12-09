import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { Genre } from './genre';
import { Director } from './director';
import { Actor } from './actor';
import { Review } from './review';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // import

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'http://localhost:8080/movies';

  movies: Movie[] = [
    {
      id: 0,
      version: 0,
      title: 'Titanic',
      genres: [new Genre("drama", 0, 1)],
      director: new Director('James Cameron', 0, 0),
      actors: [new Actor('Leonardo DiCaprio', 0, 0)],
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      releaseDate: '1997',
      reviews: [new Review('good', 0, 0)]
    },
    {
      id: 1,
      version: 0,
      title: 'Fight Club',
      genres: [new Genre("drama", 0, 1)],
      director: new Director('David Fincher', 1, 0),
      actors: [new Actor('Brad Pitt', 1, 0)],
      description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      releaseDate: '1999',
      reviews: [new Review('interesting', 1, 1)]
    }
  ];
  
  constructor(
    private http: HttpClient
  ) { }
  
  getMovies(): Promise<Movie[]> {
    return this.http.get<Movie[]>(`${this.movieUrl}`, httpOptions).toPromise();
  }
  
  getMovie(title) {
    return this.movies.find(i => i.title == title);
  }
}
