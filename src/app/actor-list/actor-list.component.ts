import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  public selectedActor: Actor;

  private actors: Actor[] = [];

  constructor(
    private actorService: ActorService
  ) {
  }

  onDeleteClick(id: number) {
    this.actorService.deleteActor(id)
    .then(async () => {
      this.actors = await this.actorService.getActors();
    })
  }

  onFormSubmit(actor: Actor) {
    this.actorService.createActor(actor)
                        .then(createdActor => {
                          this.actors.push(createdActor);
                        });
}

  async ngOnInit(): Promise<void> {
    this.actors = await this.actorService.getActors();
  }

}
