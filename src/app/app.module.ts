import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxPaginationModule } from 'ngx-pagination';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ROOT_REDUCER } from './state/app.state';
import { SearchCharactersComponent } from './components/search-characters/search-characters.component';
import { DetailCharacterPageComponent } from './components/detail-character-page/detail-character-page.component';
import { CharactersCardsContainerComponent } from './components/characters-cards-container/characters-cards-container.component';
import { CharactersEffects } from './state/effects/character.effects';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CharacterCardComponent,
    PageNotFoundComponent,
    SearchCharactersComponent,
    DetailCharacterPageComponent,
    CharactersCardsContainerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([CharactersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
