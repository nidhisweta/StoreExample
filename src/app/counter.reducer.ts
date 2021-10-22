import { increment, decrement, reset } from './counter.action';
import { Action } from '@ngrx/store';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case increment.type:
      state++;
      break;
    case decrement.type:
      state--;
      break;
    case reset.type:
      state = initialState;
      break;
  }
  
  return state;
}

export function counter2Reducer(state = initialState, action: Action) {
  switch (action.type) {
    case increment.type:
      state++;
      break;
    case decrement.type:
      state--;
      break;
    case reset.type:
      state = initialState;
      break;
  }
  return state;
}
