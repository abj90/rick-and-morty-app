import { createAction, props } from '@ngrx/store';
import { ICharacterRequest } from '@models/interfaces';

export const loadCharacters = createAction('[Character List] Load characters');

export const LoadedCharacters = createAction(
  '[Character List] Loaded success',
  props<{ characters: ICharacterRequest }>()
);
