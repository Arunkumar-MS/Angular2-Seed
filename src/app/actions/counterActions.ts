import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../reducers/counter.reducer';

@Injectable()
export class CounterActions {

  constructor(private store: Store<any>) { }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
