import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from './actions/counterActions'
import { Store } from '@ngrx/store';
@Component({
  selector : 'my-app',
  template: `
		<button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async}}</div>
		<button (click)="decrement()">Decrement</button>
		<button (click)="reset()">Reset Counter</button>
	`
})

export class AppComponent {
  counter: Observable<number>;

	constructor(
    private store: Store<any>,
    private counterActions: CounterActions
  ) {
		this.counter = store.select('counter');
	}

	increment() {
		this.counterActions.increment();
	}

	decrement() {
		this.counterActions.decrement();
	}

	reset() {
		this.counterActions.reset();
	}
}
