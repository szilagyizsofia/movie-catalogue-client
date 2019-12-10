import { Component, OnInit } from '@angular/core';
import { MovieActorService } from '../movie-actor.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-actor-list',
  templateUrl: './movie-actor-list.component.html',
  styleUrls: ['./movie-actor-list.component.css']
})
export class MovieActorListComponent implements OnInit {

  private movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieactorService: MovieActorService
  ) { }

  async ngOnInit(): Promise<void> {
    const name = this.route.snapshot.paramMap.get('name');
    this.movies = await this.movieactorService.getMovies(name);
  }

}
