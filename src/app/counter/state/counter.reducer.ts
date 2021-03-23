import { decrement, increment, reset } from './counter.action';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    if (state.counter > 0) {
      return {
        ...state,
        counter: state.counter - 1,
      };
    } else {
      return {
        ...state,
        counter: 0,
      };
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(
  state: { counter: number } | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
