import { Component, Input } from '@angular/core';

import { ICharacter } from '@models/interfaces';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass'],
})
export class CharacterCardComponent {
  @Input() character: ICharacter;
}
