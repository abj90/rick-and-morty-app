import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './components/container/container.component';
import { DetailCharacterPageComponent } from './components/detail-character-page/detail-character-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'characters', component: ContainerComponent },
  { path: 'character/:id', component: DetailCharacterPageComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
