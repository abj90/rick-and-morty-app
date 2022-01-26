import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharacterPageComponent } from './detail-character-page.component';

describe('DetailCharacterPageComponent', () => {
  let component: DetailCharacterPageComponent;
  let fixture: ComponentFixture<DetailCharacterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCharacterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCharacterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
