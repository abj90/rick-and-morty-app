import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { getCharacterData } from '@actions/character.actions';
import { AppState } from '@state/app.state';
import { selectCharacter } from '@selectors/characters.selector';
import { ICharacter } from '@models/interfaces';
import { getStatusIcon } from '@shared/share-functions';
import { CHARACTERS, ID } from '@shared/constants';

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
  public character: ICharacter;
  public statusIcon: string;

  ngOnInit(): void {
    this.getCharacterById();
    this.store.select(selectCharacter).subscribe((resp: any) => {
      this.character = resp;
      this.statusIcon = getStatusIcon(this.character?.status);
    });
  }

  getCharacterById(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.store.dispatch(getCharacterData({ id: params.get(ID) }));
    });
  }

  onBack(): void {
    this.router.navigate([CHARACTERS]);
  }
}
