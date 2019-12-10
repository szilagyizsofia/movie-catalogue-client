import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // import
import { MovieObj } from './movie-obj';
import { Movie } from './movie';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieActorService {

  private movieUrl = 'http://localhost:8080/movies/actor/search';
  
  constructor(
    private http: HttpClient
  ) { }
  
  getMovies(name: String): Promise<Movie[]> {
    return this.http.get<Movie[]>(`${this.movieUrl}/${name}`, httpOptions).toPromise();
  }
}
