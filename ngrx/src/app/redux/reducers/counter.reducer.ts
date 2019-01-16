export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface AppState {
  count: number;
}

const initialState =  { count: 0 };

export function counterReducer(state: AppState = initialState, action) {

  switch (action.type) {
    case INCREMENT:
      state.count++;
      return state;

    case DECREMENT:
      state.count--;
      return state;

    default:
      return state;
  }
}
