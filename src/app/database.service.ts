import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;
  getActors() {
    return this.http.get("/actors");
  }
  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }
  createActor(data) {
    return this.http.post("/actors", data, httpOptions);
  }
  updateActor(id, data) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }
  createMovie(data) {
    return this.http.post("/movies", data, httpOptions);
  }
  getMovies() {
    return this.http.get("/movies");
  }
  deleteMovie(id) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteMovieaYear(year) {
    let url = "movies/removeSpecific/1500/" + year;
    return this.http.delete(url, httpOptions)
  }
  addActortoMovie(actorid, movieid) {
    let url = '/movies/' + movieid + '/' + actorid;
    return this.http.post(url, httpOptions);
 }
  showActorYear(byear) {
      let url = "/actors/" + "?min_age=1" + "&max_age=20";
      return this.http.get(url);
  }



}
