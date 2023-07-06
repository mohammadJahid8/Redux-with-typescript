import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex ps-5 pt-5">
        <button
          className="btn bg-purple-100"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn bg-purple-100"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by amount
        </button>
        <div>{count}</div>
        <button
          className="btn bg-purple-100"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
