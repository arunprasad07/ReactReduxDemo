import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; //useStore is alos there. But useSelector is more convinent

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increment'}); 
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'}); 
  };

  const counter = useSelector((state) => {return state.counter});

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
