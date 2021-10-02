import React, { useEffect, useState } from "react";
import ReactDOM  from 'react-dom';
import Cookies from "universal-cookie";

function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0)
    const [reverseCounter, setReverseCounter] = useState(100)
    console.log("counter value: ", counter);
    console.log("reverse counter value: ", reverseCounter);
    // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(counter+1)
    }
    console.log("increment value: ", increment);
    const decrement = () => {
      setReverseCounter(reverseCounter-1)
    }
    console.log("decrement value: ", decrement);
    const incrementCookies = new Cookies();
    const decrementCookies = new Cookies();
    console.log("incrementCookies value: ", incrementCookies);
    console.log("decrementCookies value: ", decrementCookies);
    incrementCookies.set("increment",counter, { path: '/' });
    decrementCookies.set("decrement",reverseCounter, { path: '/' });
  
    // View: the UI definition
    var cookieIncrementValue = incrementCookies.get("increment");
    console.log("cookieIncrementValue value: ", cookieIncrementValue);
    var cookieDecrementValue = incrementCookies.get("decrement");
    console.log("cookieDecrementValue value: ", cookieDecrementValue);
    return (
      <div>
        Value: {cookieIncrementValue} <button onClick={increment}>Increment</button>
        Value: {cookieDecrementValue} <button onClick={decrement}>Decrement</button>
      </div>
    )
  }

export default Counter;