import { Actor } from './actor';
import { Genre } from './genre';

export class Movie {

    public id: number;
    public title: string;
    // 1-5 in .5 point increments
    public rating: number;
    public year: number;

    public actors: Array<Actor>;
    public genres: Array<Genre>;

}
