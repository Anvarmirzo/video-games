import {Component, OnInit} from '@angular/core';
import {IGame} from '../../models';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sort = '';
  games: IGame[] = [];
  private routerSub?: Subscription;
  private gameSub?: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router?: Router
  ) {
  }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.queryParams.subscribe({
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
    this.router?.navigate(['details', id]);
  }

  searchGames(sort: string, search?: string) {
    this.gameSub = this.httpService.getGameList(sort, search).subscribe({
      next: (games) => this.games = games.results
    })
  }

  ngOnDestroy() {
    if (this.gameSub) this.gameSub.unsubscribe();
    if (this.routerSub) this.routerSub.unsubscribe();
  }
}
