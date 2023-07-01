import { createStore } from 'redux';

// Define the initial state
const initialState = {
  counter: 0,
};

// Define the reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'RESET':
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(counterReducer);

export default store;
