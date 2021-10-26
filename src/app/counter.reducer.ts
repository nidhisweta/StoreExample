import { increment, decrement, reset } from './counter.action';
import { Action } from '@ngrx/store';

export const initialState = 0;
export const initialState2 = {
  counter: 0,
  name: 'name',
};

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
  //console.log('in red 1: ' + state);
  return state;
}

export function counter2Reducer(
  state: { counter: number; name: string } = initialState2,
  action: Action
) {
  switch (action.type) {
    case increment.type:
      state.counter++;
      break;
  }
  //console.log('in red 2 :' + state.counter);
  return state;
}
