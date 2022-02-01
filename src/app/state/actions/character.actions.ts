import { createAction, props } from '@ngrx/store';

import { ICharacter, ICharacterRequest } from '@models/interfaces';

export const LoadedCharacters = createAction(
  '[Character List] Loaded success',
  props<{ characters: ICharacterRequest }>()
);

export const LoadedCharacter = createAction(
  '[Character details] Loadded success',
  props<{ character: ICharacter }>()
);

// to be invoked from components
export const getCharacters = createAction(
  '[Character List] Load characters',
  props<{ query: string; page: number }>()
);

export const getCharacterData = createAction(
  '[Character id] Get character data',
  props<{ id: string | null }>()
);

// to handle errors
export const ApiError = createAction('API error', props<{ error: any }>());
