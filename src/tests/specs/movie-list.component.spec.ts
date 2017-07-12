import { MovieListComponent } from '../../app/components/movie-list.component';
import { MovieService } from '../../app/services/movie.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      providers: [ MovieService ],
      imports: [ FormsModule, HttpModule ]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );
  
  it('should fail', () => expect(true).toEqual(false));

});
