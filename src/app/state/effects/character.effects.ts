import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { ICharacter, ICharacterRequest } from '@models/interfaces';
import { CharacterService } from '@services/character.service';
import {
  ApiError,
  getCharacterData,
  getCharacters,
  LoadedCharacter,
  LoadedCharacters,
} from '@actions/character.actions';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacters),
      mergeMap((action) =>
        this.characterService.getCharacters(action.query, action.page).pipe(
          map((characters: ICharacterRequest) =>
            LoadedCharacters({ characters })
          ),
          catchError((error) => of(ApiError({ error })))
        )
      )
    )
  );

  loadCharacterById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacterData),
      mergeMap((action) =>
        this.characterService.getCharacterById(action.id).pipe(
          map((character: ICharacter) => LoadedCharacter({ character })),
          catchError((error) => of(ApiError({ error })))
        )
      )
    )
  );
}
