import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Actor } from '../models/actor';

@Injectable()
export class ActorService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private actorsUrl = 'api/Actors';  // URL to web api

  constructor(private http: Http) { }

  getActors(): Promise<Actor[]> {
    return this.http.get(this.actorsUrl)
      .toPromise()
      .then(response => response.json().data as Actor[])
      .catch(this.handleError);
  }


  getActorById(id: number): Promise<Actor> {
    const url = `${this.actorsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Actor)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.actorsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Actor> {
    return this.http
      .post(this.actorsUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Actor)
      .catch(this.handleError);
  }

  update(actor: Actor): Promise<Actor> {
    const url = `${this.actorsUrl}/${actor.id}`;
    return this.http
      .put(url, JSON.stringify(actor), { headers: this.headers })
      .toPromise()
      .then(() => actor)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

