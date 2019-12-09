import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from "../movie.service"

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public selectedMovie: Movie;

  private movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { 
    this.movies = movieService.getMovies();
  }

  onSelectMovie(movie) {
    this.selectedMovie = movie;
  }

  onFormSubmit(movie: Movie) {
      if(this.selectedMovie.title.length > 0){
        this.selectedMovie.genre = movie.genre;
        this.selectedMovie.director = movie.director;
        this.selectedMovie.actor = movie.actor;
        this.selectedMovie.description = movie.description;
        this.selectedMovie.releaseDate = movie.releaseDate;
        this.selectedMovie.review = movie.review;
      }
      else {
        this.selectedMovie.title = movie.title;
        this.selectedMovie.genre = movie.genre;
        this.selectedMovie.director = movie.director;
        this.selectedMovie.actor = movie.actor;
        this.selectedMovie.description = movie.description;
        this.selectedMovie.releaseDate = movie.releaseDate;
        this.selectedMovie.review = movie.review;
        this.movies.push(this.selectedMovie);
      }
      this.selectedMovie = null;
  }

  onNewClick() {
    this.selectedMovie = new Movie();
  }

  ngOnInit() {  }

}
