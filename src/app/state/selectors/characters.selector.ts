import { createSelector } from '@ngrx/store';
import { ICharacterState } from '@models/interfaces';
import { AppState } from '../app.state';

export const selectCharactersFeature = (state: AppState) => state.characters;

export const selectCharacters = createSelector(
  selectCharactersFeature,
  (state: ICharacterState) => state.characters?.results
);

export const selectLoading = createSelector(
  selectCharactersFeature,
  (state: ICharacterState) => state.loading
);
