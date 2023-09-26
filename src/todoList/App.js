import React from 'react';
import TodoList from './TodoList';
import store from './store';
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <h1>Redux Todo App</h1>
      <TodoList />
    </Provider>
  );
};

export default App;
