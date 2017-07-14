import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Movies = [
      { id: 1, title: 'Trolls', year: 2016, genres: [{ id: 9, name: 'Animation' }], actors: [{ id: 1, firstName: 'Justin', lastName: 'Timberlake' }], rating: 4.5 }
    ];
    const Genres = [
      { id: 1, name: 'Comedy' },
      { id: 2, name: 'Action' },
      { id: 3, name: 'Drama' },
      { id: 4, name: 'Family' },
      { id: 5, name: 'Horror' },
      { id: 6, name: 'Romance' },
      { id: 7, name: 'Sci-Fi' },
      { id: 8, name: 'History' },
      { id: 9, name: 'Animation' }
    ];
    const Actors = [
      { id: 1, firstName: 'Johnny', lastName: 'Depp' },
      { id: 2, firstName: 'Brad', lastName: 'Pitt' },
      { id: 3, firstName: 'Leonardo', lastName: 'DiCaprio' },
      { id: 4, firstName: 'Tom', lastName: 'Cruise' },
      { id: 5, firstName: 'Tom', lastName: 'Hanks' },
      { id: 6, firstName: 'Robert', lastName: 'Downey Jr.' },
      { id: 7, firstName: 'Will', lastName: 'Smith' },
      { id: 8, firstName: 'Harrison', lastName: 'Ford' },
      { id: 9, firstName: 'Denzel', lastName: 'Washington' },
      { id: 10, firstName: 'Morgan', lastName: 'Freeman' },
      { id: 11, firstName: 'Samuel L.', lastName: 'Jackson' },
      { id: 12, firstName: 'Clint', lastName: 'Eastwood' },
      { id: 13, firstName: 'George', lastName: 'Clooney' },
      { id: 14, firstName: 'Ben', lastName: 'Affleck' },
      { id: 15, firstName: 'Adam', lastName: 'Sandler' }
    ];
    return { Movies, Genres, Actors };
  }
}
