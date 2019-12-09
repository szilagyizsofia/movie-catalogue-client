import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }
  
  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.movie = this.movieService.getMovie(title);
  }

}
