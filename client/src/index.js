import React from 'react';
import ReactDOM  from 'react-dom';
import Provider  from 'react-redux';
import {createStore, applyMiddleWare} from 'redux';

import Counter from './components/counter'

// store -> globalized state

// action - increment

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

// reducer

const counter = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
}

let store = createStore(counter);

// display it on console

store.subscribe(() => console.log(store.getState()));

// dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
    <Counter />, 
    document.querySelector('#showCounter')
); 