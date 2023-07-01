import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Define the initial state
const initialState = {
  todos: [],
};

// Define the actions
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Define the action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

// Define the reducer for todos
const todosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: new Date().getTime(),
          text: action.payload.text,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

// Combine multiple reducers
const rootReducer = combineReducers({
  todos: todosReducer,
});

// Create the Redux store with middlewares
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
