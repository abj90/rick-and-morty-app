import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.sass'],
})
export class SearchCharactersComponent {
  @Output() refreshData: EventEmitter<string> = new EventEmitter<string>();
  public query: string = '';

  ngOnInit(): void {}

  onKey(value: string): void {
    this.query = value;
  }

  onSearch(): void {
    this.refreshData.emit(this.query);
  }
}
