import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from '../models/movie';
import { Actor } from '../models/actor';

@Injectable()
export class MovieSearchService {

  constructor(private http: Http) { }

  searchTitle(title: string): Observable<Movie[]> {
    return this.http
      .get(`api/Movies/?title=${title}`)
      .map(response => response.json().data as Movie[]);
  }

  searchYear(year: string): Observable<Movie[]> {
    return this.http
      .get(`api/Movies/?year=${year}`)
      .map(response => response.json().data as Movie[]);
  }

  searchGenre(genre: string): Observable<Movie[]> {
    return this.http
      .get(`api/Movies/?genre=${genre}`)
      .map(response => response.json().data as Movie[]);
  }

  searchActorFirstName(firstName: string): Observable<Movie[]> {
    return this.http
      .get(`api/Movies/?actors.firstName=${firstName}`)
      .map(response => response.json().data as Movie[]);
  }

  searchActorLastName(lastName: string): Observable<Movie[]> {
    return this.http
      .get(`api/Movies/?actors.lastName=${lastName}`)
      .map(response => response.json().data as Movie[]);
  }
}
