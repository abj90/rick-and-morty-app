import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { getCharacterData } from '@actions/character.actions';
import { AppState } from '@state/app.state';
import { selectCharacter } from '@selectors/characters.selector';
import { ICharacter } from '@models/interfaces';

@Component({
  selector: 'app-detail-character-page',
  templateUrl: './detail-character-page.component.html',
  styleUrls: ['./detail-character-page.component.sass'],
})
export class DetailCharacterPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.store.dispatch(getCharacterData({ id: params.get('id') }));
    });
  }

  onBack(): void {
    this.router.navigate(['characters']);
  }
}
