import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { CharacterComponent } from './components/character/character.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CharacterComponent,
    MoviesListComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
