import { Component, signal, computed, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'value-display',
  template: '<p>{{label()}}</p> <button (click)="increment()">Click 2</button>',
})
export class ValueDisplay {
  value = model.required<number>();
  label = computed(() => `Value: ${this.value()}`);

  increment() {
    this.value.update((value) => value + 1);
  }
}

@Component({
  selector: 'basic-increment-button',
  template:
    '<button type="button" (click)="increment()">Click</button> <br><value-display [(value)]="value"/>',
  imports: [ValueDisplay],
})
export class BasicIncrementButton {
  value = model<number>(0);

  increment() {
    this.value.update((value) => value + 1);
  }
}

@Component({
  imports: [RouterOutlet, BasicIncrementButton],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('software-architecture-project');
}
