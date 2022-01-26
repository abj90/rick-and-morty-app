import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICharacterRequest } from '@models/interfaces';

import { loadCharacters } from '@actions/character.actions';
import { selectLoading } from '@selectors/characters.selector';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadCharacters());
  }
}
