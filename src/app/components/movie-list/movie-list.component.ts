import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[];

  constructor() {
  }

  ngOnInit() {
    this.movies = [
      {
        title: 'Zielona mila',
        year: '2006',
        poster: 'https://ssl-gfx.filmweb.pl/ph/08/62/862/182042.3.jpg'
      },
      {
        title: 'Forest Gump',
        year: '1994',
        poster: 'https://ssl-gfx.filmweb.pl/ph/09/98/998/182082_1.3.jpg'
      }, {
        title: 'Nietykalni',
        year: '2011',
        poster: 'https://ssl-gfx.filmweb.pl/ph/33/90/583390/300448_1.2.jpg'
      }
    ];
  }

}
