import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


const baseUrl = 'http://www.omdbapi.com/?apikey=bae41d52';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient) {
  }

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(baseUrl, {params: {s: searchTerm}});
  }

  getMoviesDetails(imdbID: string): Observable<any> {
    return this.http.get(baseUrl, {params :{i: imdbID}});
  }
}
