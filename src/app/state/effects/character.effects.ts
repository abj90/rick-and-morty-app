import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { ICharacterRequest } from '@models/interfaces';
import { CharacterService } from '@services/character.service';

@Injectable()
export class CharactersEffects {
  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Character List] Load characters'),
      mergeMap(() =>
        this.characterService.getCharacters().pipe(
          map((characters: ICharacterRequest) => ({
            type: '[Character List] Loaded success',
            characters,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
