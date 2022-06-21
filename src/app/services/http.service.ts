import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment as env} from "../../environments/environment";
import {APIResponse, Game} from "../models";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getGameList(ordering: string, search?: string) {
    let params = new HttpParams().set('ordering', ordering);
    if (search) params = params.set('search', search);
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {params});
  }
}
