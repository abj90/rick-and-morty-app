import { createReducer, on } from '@ngrx/store';
import { ICharacterState } from '@models/interfaces';
import { loadCharacters, LoadedCharacters } from '@actions/character.actions';

export const initialState: ICharacterState = {
  loading: false,
  characters: null,
};

export const charactersReducer = createReducer(
  initialState,
  on(loadCharacters, (state) => {
    return { ...state, loading: true };
  }),
  on(LoadedCharacters, (state, { characters }) => {
    return { ...state, loading: false, characters };
  })
);
