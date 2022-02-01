import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Store } from '@ngrx/store';

import { selectCharacters } from '@selectors/characters.selector';
import { AppState } from '@state/app.state';
import { ICharacter, IInfo } from '@models/interfaces';
import { getCharacters } from '@state/actions/character.actions';

@Component({
  selector: 'app-characters-cards-container',
  templateUrl: './characters-cards-container.component.html',
  styleUrls: ['./characters-cards-container.component.sass'],
})
export class CharactersCardsContainerComponent implements OnInit, OnChanges {
  @Input() query;
  public characters: ICharacter[];
  public requestInfo: IInfo;
  public page = 1;
  public pageSize = 20;
  public responsive = true;
  public directionLinks = true;
  public maxSize = 9;

  constructor(private store: Store<AppState>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['query'].firstChange) {
      this.query = changes['query'].currentValue;
      this.searchCharacter(this.query);
    }
  }

  ngOnInit(): void {
    this.getCharacterData(this.query, this.page);
    this.store.select(selectCharacters).subscribe((resp: any) => {
      this.characters = resp?.results;
      this.requestInfo = resp?.info;
    });
  }

  searchCharacter(query: string) {
    this.page = 1;
    this.getCharacterData(query, this.page);
  }

  onPageChange(event: number): void {
    this.page = event;
    this.getCharacterData(this.query, this.page);
  }

  getCharacterData(query: string, page: number): void {
    this.store.dispatch(getCharacters({ query, page }));
  }
}
