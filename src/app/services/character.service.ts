import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICharacter, ICharacterRequest } from '@models/interfaces';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(query = '', page = 1): Observable<ICharacterRequest> {
    return this.http.get<ICharacterRequest>(
      `${environment.baseUrl}/?name=${query}&page=${page}`
    );
  }

  getCharacterById(id: string | null): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${environment.baseUrl}/${id}`);
  }
}
