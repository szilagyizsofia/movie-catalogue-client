import { Genre } from './genre';
import { Director } from './director';
import { Actor } from './actor';
import { Review } from './review';

export class Movie {
    id: number = 0;
    version: number = 0;
    title: string = '';
    genres: Genre[] = [];
    director: Director = new Director("", 0, 0);
    actors: Actor[] = [];
    description: string = '';
    releaseDate: string = '';
    reviews: Review[] = [];
}
