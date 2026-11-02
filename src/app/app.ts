import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'test-component',
  template: '<p>testing</p>',
})
class TestComponent {}

@Component({
  selector: 'basic-incrementing',
  template: '<button tuiButton size="l" (click)="increment()">Click</button>',
})
export class BasicIncrementing {
  value = signal(0);

  increment() {
    this.value.update((value) => value + 1);
    console.log(this.value());
  }
}

@Component({
  imports: [RouterOutlet, TestComponent, BasicIncrementing],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('software-architecture-project');
}
