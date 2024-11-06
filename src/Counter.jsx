
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/Counter/CounterSlice';

export default function Counter() {
  let counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className=" max-w-[400px] w-[350px] md:w-[400px] lg:w-[400px] min-w-[350px] bg-gray-800 p-5 rounded-sm flex flex-col gap-5 items-center">
      <h1 className=" text-white">Counter value: {counter}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className=" text-white bg-green-500 px-2 rounded-sm"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className=" text-white bg-red-500 px-2 rounded-sm"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
