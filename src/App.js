import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  //const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(15))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
    </div>
  );
}

export default App;
