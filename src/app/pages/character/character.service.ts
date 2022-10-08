import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as Model from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  protected readonly _BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Model.List> {
    return this.http.get<Model.List>(`${this._BASE_URL}/character`);
  }
}
