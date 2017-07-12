import { Component, OnInit } from '@angular/core';

import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/templates/dashboard.component.html',
  styleUrls: ['app/content/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .then(movies => movies.forEach(movie => (movie.rating > 4) ? this.movies.push(movie) : ''));
  }
}
