import { ActionReducerMap } from '@ngrx/store';

import { ICharactersState, ICharacterState } from '@models/interfaces';
import { charactersReducer } from '@reducer/character.reducers';
import { characterDetalReducer } from '@reducer/characterDetail.reducer';

export interface AppState {
  characters: ICharactersState;
  character: ICharacterState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  characters: charactersReducer,
  character: characterDetalReducer,
};
