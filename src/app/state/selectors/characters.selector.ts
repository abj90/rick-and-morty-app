import { createSelector } from '@ngrx/store';

import { ICharactersState, ICharacterState } from '@models/interfaces';
import { AppState } from '@state/app.state';

export const getCharactersData = (state: AppState) => state.characters;
export const getCharacterData = (state: AppState) => state.character;
export const getError = (state: AppState) => state.characters.error;

export const selectCharacters = createSelector(
  getCharactersData,
  (state: ICharactersState) => state.characters
);

export const selectCharacter = createSelector(
  getCharacterData,
  (state: ICharacterState) => state.character
);

export const selectError = createSelector(
  getError,
  (state: ICharactersState) => state.error
);
