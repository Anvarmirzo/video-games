import {Component, OnInit} from '@angular/core';
import {Game} from "../../models";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sort = '';
  games: Game[] = [];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: params => {
        if (params['game-search']) {
          this.searchGames('metacrit', params['game-search']);
        } else {
          this.searchGames('metacrit');
        }

      }
    });
  }

  openGameDetails(id: number) {
  }

  searchGames(sort: string, search?: string) {
    console.log(sort);
    console.log(search);
  }
}
