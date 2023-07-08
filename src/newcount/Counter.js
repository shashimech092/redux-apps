import React from "react"
import {useSelector, useDispatch} from 'react-redux'


const Counter=()=>{
    const counter=useSelector((state)=>state.counter)
    const dispatch=useDispatch()

    const increment=()=>{
        dispatch({type: 'INCREMENT'})
    }
    
    const decrement=()=>{
        dispatch({type: 'DECREMENT'})
    }
    const reset=()=>{
        dispatch({type: 'RESET'})
    }
    return(
        <div>
            <h2>React Counter: {counter}</h2>
            <button onClick={increment}>increment </button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}

export default Counter