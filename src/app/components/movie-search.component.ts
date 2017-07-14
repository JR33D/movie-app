import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MovieSearchService } from '../services/movie-search.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'movie-search',
  templateUrl: 'app/templates/movie-search.component.html',
  styleUrls: ['app/content/movie-search.component.css'],
  providers: [MovieSearchService]
})
export class MovieSearchComponent implements OnInit {
  movies: Observable<{} | Movie[]>;
  private searchTerms = new Subject<IQuery>();

  constructor(
    private movieSearchService: MovieSearchService,
    private router: Router) { }

  // Push a search term into the observable stream.
  search(prop: string, term: string): void {
    this.searchTerms.next({ prop: prop, term: term });
  }

  ngOnInit(): void {
    this.movies = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap((query: IQuery) => query   // switch to new observable each time the term changes
        // return the http search observable
        ? this.movieSearchService.search(query.prop, query.term)
        // or the observable of empty movies if there was no search term
        : Observable.of<Movie[]>([]))
      .catch((error: string) => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Movie[]>([]);
      });
  }

  gotoDetail(movie: Movie): void {
    let link = ['/detail', movie.id];
    this.router.navigate(link);
  }
}

interface IQuery {
  prop: string;
  term: string;
}
