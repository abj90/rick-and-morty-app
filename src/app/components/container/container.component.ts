import { Component } from '@angular/core';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent {
  public query = '';

  refreshData(event: string): void {
    this.query = event;
  }
}
