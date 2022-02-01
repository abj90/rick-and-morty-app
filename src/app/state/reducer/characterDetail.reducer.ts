import { createReducer, on } from '@ngrx/store';

import { ApiError, LoadedCharacter } from '@actions/character.actions';
import { ICharacterState } from '@models/interfaces';

export const initialState: ICharacterState = {
  character: null,
  error: null,
};

export const characterDetalReducer = createReducer(
  initialState,
  on(LoadedCharacter, (state, { character }) => {
    return { ...state, character, error: null };
  }),
  on(ApiError, (state, { error }) => {
    return { ...state, error, character: null };
  })
);
