import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,isloggedIn } from "./actions";
export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Counter and Loggin status</h1>
      <h2> Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    <hr/>
    <button onClick={() => dispatch(isloggedIn())}>Is Logged In</button>
      {isLogged ? (
        <h2> valuable information should not see : {isLogged}</h2>
      ) : (
        ""
      )}
    </div>
  );
}
