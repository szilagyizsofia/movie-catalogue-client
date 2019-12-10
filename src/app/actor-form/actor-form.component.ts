import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from '../actor';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent implements OnInit, OnChanges {

  @Input() movie: Actor
  model: Actor
  @Output() onSubmit = new EventEmitter<Actor>();

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
