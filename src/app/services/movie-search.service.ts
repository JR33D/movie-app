import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from '../models/movie';
import { Actor } from '../models/actor';

@Injectable()
export class MovieSearchService {

  constructor(private http: Http) { }

  search(prop: string, term: string) {
    return this.http
      .get(`api/Movies/?${prop}=${term}`)
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
