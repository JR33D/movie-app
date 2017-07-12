import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard.component';
import { MovieComponent } from './components/movie.component';
import { MovieDetailComponent } from './components/movie-detail.component';
import { MovieService } from './services/movie.service';
import { MovieSearchComponent } from './components/movie-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieDetailComponent,
    MovieComponent,
    MovieSearchComponent
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
