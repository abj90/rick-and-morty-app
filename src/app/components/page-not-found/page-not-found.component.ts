import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CHARACTERS } from '@shared/constants';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass'],
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  onBack(): void {
    this.router.navigate([CHARACTERS]);
  }
}
