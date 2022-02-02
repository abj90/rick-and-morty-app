import { Component, Input, OnInit } from '@angular/core';

import { ICharacter } from '@models/interfaces';
import { getStatusIcon } from '@shared/share-functions';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: ICharacter;
  public statusIcon: string;

  ngOnInit(): void {
    this.statusIcon = getStatusIcon(this.character.status);
  }
}
