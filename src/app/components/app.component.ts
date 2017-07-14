import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="center">
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/movies" routerLinkActive="active">Movies</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app/content/app.component.css']
})
export class AppComponent {
  title = 'Movie Search';
}
