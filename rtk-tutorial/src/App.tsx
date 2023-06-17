import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './store/configureStore';
import { increment } from './store/counterSlice';

function App() {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>현재 count의 값: {count}</h1>
            <button onClick={() => {dispatch(increment(1))}}>+1</button>
            <button onClick={() => {dispatch(increment(-1))}}>-1</button>
            <button onClick={() => {dispatch(increment(5))}}>+1</button>
        </div>
    );
}

export default App;
