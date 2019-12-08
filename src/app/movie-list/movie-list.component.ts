import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [
    {
      title: 'Titanic',
      genre: 'drama',
      director: 'James Cameron',
      actor: 'Leonardo DiCaprio',
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      releaseDate: '1997',
      review: 'good'
    }
  ];

  constructor() { }

  ngOnInit() {  }

}
