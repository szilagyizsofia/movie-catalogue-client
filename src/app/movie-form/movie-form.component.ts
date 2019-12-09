import { Component, OnInit, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { Movie } from '../movie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit, OnChanges {

  @Input() movie: Movie
  model: Movie
  @Output() onSubmit = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.movie);
  }

  
  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
