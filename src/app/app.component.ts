import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter.reducer';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

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

	constructor(private store: Store<any>){
		this.counter = store.select('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}
