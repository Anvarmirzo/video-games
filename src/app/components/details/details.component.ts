import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../models';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId = '';
  game: Game = {
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
  routeSub?: Subscription;
  gameSub?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    this.gameSub = this.httpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;

        setTimeout(() => {
          this.gameRating = this.game?.metacritic || 0;
        }, 1000);
      });
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}