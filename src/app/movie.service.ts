import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { HttpClient, HttpHeaders } from '@angular/common/http'; // import
import { MovieObj } from './movie-obj';

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
  
  constructor(
    private http: HttpClient
  ) { }
  
  getMovies(): Promise<Movie[]> {
    return this.http.get<Movie[]>(`${this.movieUrl}`, httpOptions).toPromise();
  }

  getMovie(title: String): Promise<Movie> {
    return this.http.get<Movie>(`${this.movieUrl}/name/${title}`, httpOptions).toPromise();
  }

  createMovie(movie: MovieObj): Promise<MovieObj> {
    return this.http.post<MovieObj>(`${this.movieUrl}`, movie, httpOptions).toPromise();
  }
  
  updateMovie(movie: Movie): Promise<Movie> {
    return this.http.put<Movie>(`${this.movieUrl}/${movie.id}`, movie, httpOptions).toPromise();
  }
  
  deleteMovie(id): Promise<Movie> {
    return this.http.delete<Movie>(`${this.movieUrl}/${id}`, httpOptions).toPromise();
  }
}
