import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'test-component',
  template: '<p>testing</p>',
})
class TestComponent {}

@Component({
  imports: [RouterOutlet, TestComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('software-architecture-project');
}
