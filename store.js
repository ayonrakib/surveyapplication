const redux = require('redux');
const createStore = redux.createStore();

const store = createStore(() => "My name is Ayon", {}, applyMiddleWare());

console.log("Initial state is: ", store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated state: ",store.getState()));

store.dispatch();

unsubscribe();