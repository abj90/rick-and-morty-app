import { createReducer, on } from '@ngrx/store';
import { ICharactersState } from '@models/interfaces';
import { ApiError, LoadedCharacters } from '@actions/character.actions';

export const initialState: ICharactersState = {
  characters: null,
  error: null,
};

export const charactersReducer = createReducer(
  initialState,
  on(LoadedCharacters, (state, { characters }) => {
    return { ...state, characters, error: null };
  }),
  on(ApiError, (state, { error }) => {
    return { ...state, error, characters: null };
  })
);
