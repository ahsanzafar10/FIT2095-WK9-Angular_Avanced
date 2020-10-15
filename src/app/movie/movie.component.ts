import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private dbService: DatabaseService) {}

  ngOnInit() {
    this.onGetMovies();
  }

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  section = 1;
  moviename: string = "";
  year: number = 0;
  movieId: string = "";
  ayear = 1;
  movieselection = "";
  actorselection = "";

  //Create a new movie, POST request
  onSaveMovie() {
    let obj = { title: this.moviename, year: this.year, actors: [] };
    this.dbService.createMovie(obj).subscribe(result => {
      this.onGetMovies();
    });

  }


  changeSection(sectionId) {
    this.section = sectionId;
    this.onGetActors();
  }

  //Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
      console.log(data);
    });
  }

  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  //Delete Movie
  onDeleteActor(item) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMovies();
    });
  }

  // Delete movies before year
  onDeleteActorYear() {
    this.dbService.deleteMovieaYear(this.ayear).subscribe(result => {
      this.onGetMovies();
    })
  }

  // Add actor to movie
  onFinaliseActortoMovie() {
    this.dbService.addActortoMovie(this.actorselection, this.movieselection).subscribe(result => {
      this.onGetMovies;
    });
  }


  

}
