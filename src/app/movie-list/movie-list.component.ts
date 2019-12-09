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
  }

  onSelectMovie(movie) {
    this.selectedMovie = movie;
  }

  onFormSubmit(movie: Movie) {
      if(this.selectedMovie.title.length > 0){
        this.selectedMovie.genres = movie.genres;
        this.selectedMovie.director = movie.director;
        this.selectedMovie.actors = movie.actors;
        this.selectedMovie.description = movie.description;
        this.selectedMovie.releaseDate = movie.releaseDate;
        this.selectedMovie.reviews = movie.reviews;
      }
      else {
        this.selectedMovie.title = movie.title;
        this.selectedMovie.genres = movie.genres;
        this.selectedMovie.director = movie.director;
        this.selectedMovie.actors = movie.actors;
        this.selectedMovie.description = movie.description;
        this.selectedMovie.releaseDate = movie.releaseDate;
        this.selectedMovie.reviews = movie.reviews;
        this.movies.push(this.selectedMovie);
      }
      this.selectedMovie = null;
  }

  onNewClick() {
    this.selectedMovie = new Movie();
  }

  async ngOnInit(): Promise<void> {
    this.movies = await this.movieService.getMovies();
  }

}
