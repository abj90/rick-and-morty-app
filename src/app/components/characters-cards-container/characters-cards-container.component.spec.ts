import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCardsContainerComponent } from './characters-cards-container.component';

describe('CharactersCardsContainerComponent', () => {
  let component: CharactersCardsContainerComponent;
  let fixture: ComponentFixture<CharactersCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersCardsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
