import {Component, Input, OnInit} from '@angular/core';
import {IGame} from '../../models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: IGame = {
    background_image: '',
    description: '',
    genres: [],
    id: 0,
    metacritic: 0,
    metacritic_url: '',
    parent_platforms: [],
    publishers: [],
    ratings: [],
    released: '',
    screenshots: [],
    trailers: [],
    website: '',
    name: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
