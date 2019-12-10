import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // import
import { Actor } from './actor';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actorUrl = 'http://localhost:8080/actors';
  
  constructor(
    private http: HttpClient
  ) { }
  
  getActors(): Promise<Actor[]> {
    return this.http.get<Actor[]>(`${this.actorUrl}`, httpOptions).toPromise();
  }

  deleteActor(id): Promise<Actor> {
    return this.http.delete<Actor>(`${this.actorUrl}/${id}`, httpOptions).toPromise();
  }
}
