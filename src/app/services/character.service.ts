import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter, ICharacterRequest } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ICharacterRequest> {
    return this.http.get<ICharacterRequest>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
  }
}
