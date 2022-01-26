import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { selectCharacters } from '@selectors/characters.selector';

@Component({
  selector: 'app-characters-cards-container',
  templateUrl: './characters-cards-container.component.html',
  styleUrls: ['./characters-cards-container.component.sass'],
})
export class CharactersCardsContainerComponent implements OnInit {
  characters$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.characters$ = this.store.select(selectCharacters);
  }
}
