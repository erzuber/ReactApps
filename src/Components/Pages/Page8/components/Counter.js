import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  //With Payload
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes.button} onClick={incrementHandler}>
          Increment
        </button>
        <button className={classes.button} onClick={increaseHandler}>
          Increase By 5
        </button>
        <button className={classes.button} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button className={classes.button} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
