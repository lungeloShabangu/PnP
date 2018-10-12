import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers:[MoviesService]
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MoviesService) { }
  getMovies(): void {
    this.movieService.getMovies().then(movies=> this.movies=movies);

  }
  ngOnInit() {
    this.getMovies();
  }

}
