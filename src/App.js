import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Counter from './Counter';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1 // never change state like: state.count++
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state; // always have a fallback case of returning state
    }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
