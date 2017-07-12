import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../models/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: 'app/templates/movie-detail.component.html',
  styleUrls: ['app/content/movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.movieService.getMovieById(+params.get('id')))
      .subscribe(movie => this.movie = movie as Movie);
  }

  save(): void {
    this.movieService.update(this.movie)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
