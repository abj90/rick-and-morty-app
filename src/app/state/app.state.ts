import { ActionReducerMap } from '@ngrx/store';
import { ICharacterState } from '@models/interfaces';
import { charactersReducer } from '@reducer/character.reducers';

export interface AppState {
  characters: ICharacterState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  characters: charactersReducer,
};
