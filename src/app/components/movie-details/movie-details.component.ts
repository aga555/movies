import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(private  service: MoviesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        let id = params['imdbID'];
        this.service.getMoviesDetails(id)
          .subscribe(resp => this.movie = resp);
      });
  }

}
