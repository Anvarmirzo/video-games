import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sort = '';
  games = [{
    id: 1,
    background_image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Game 1',
    parent_platforms: [{
      platform:{
        slug: 'pc',
      }
    }]
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  openGameDetails(id: number) {
  }

  searchGames(search: string) {
  }
}
