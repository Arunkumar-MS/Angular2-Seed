import {ActionReducer, combineReducers, Action} from "@ngrx/store";

import { counterReducer } from "./counter.reducer";


const reducers = {
  counter: counterReducer
};

const productionReducer: (state: any, action: any) => any  = combineReducers(reducers);

export function rootReducer(state: any, action: any): any {
  return productionReducer(state, action);
}
