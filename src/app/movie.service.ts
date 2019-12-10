import { Injectable } from '@angular/core';
import { Movie } from "./movie";
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
  
  constructor(
    private http: HttpClient
  ) { }
  
  getMovies(): Promise<Movie[]> {
    return this.http.get<Movie[]>(`${this.movieUrl}`, httpOptions).toPromise();
  }

  getMovie(title: String): Promise<Movie> {
    return this.http.get<Movie>(`${this.movieUrl}/name/${title}`, httpOptions).toPromise();
  }

  createMovie(movie: Movie): Promise<Movie> {
    return this.http.post<Movie>(`${this.movieUrl}`, movie, httpOptions).toPromise();
  }
  
  updateIssue(movie: Movie): Promise<Movie> {
    return this.http.put<Movie>(`${this.movieUrl}/${movie.id}`, movie, httpOptions).toPromise();
  }
  
  deleteIssue(id): Promise<Movie> {
    return this.http.delete<Movie>(`${this.movieUrl}/${id}`, httpOptions).toPromise();
  }
}
