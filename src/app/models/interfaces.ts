export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharacterRequest {
  info: IInfo;
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersState {
  characters: ICharacterRequest | null;
  error: any;
}

export interface ICharacterState {
  character: ICharacter | null;
  error: any;
}
