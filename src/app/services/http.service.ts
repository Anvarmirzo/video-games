import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {APIResponse, IGame, IScreenshots, ITrailer} from '../models';
import {forkJoin, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getGameList(ordering: string, search?: string) {
    let params = new HttpParams().set('ordering', ordering);
    if (search) params = params.set('search', search);
    return this.http.get<APIResponse<IGame>>(`${env.BASE_URL}/games`, {params});
  }

  getGameDetails(id: string) {
    const gameInfoRequest = this.http.get<IGame>(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get<APIResponse<ITrailer>>(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenshotsRequest = this.http.get<APIResponse<IScreenshots>>(`${env.BASE_URL}/games/${id}/screenshots`);

    return forkJoin([gameInfoRequest, gameTrailersRequest, gameScreenshotsRequest]).pipe(
      map(resp => ({
        ...resp[0],
        trailers: resp[1].results,
        screenshots: resp[2].results,
      }))
    )
  }
}
