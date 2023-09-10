import { useState } from 'react'
import React, { useReducer } from 'react';
import './counter.css'

// Definindo o redutor
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // Usando o useReducer com o redutor e o estado inicial
  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <div className='container'>
      <p className='count'>O <span className='highlight'>CONTADOR</span> está em: {state.count}</p>
      <div className="button-box">
        <button onClick={() => dispatch({ type: 'decrement' })}><span>SUBTRAIR</span></button>
        <button onClick={() => dispatch({ type: 'increment' })}><span>SOMAR</span></button>
      </div>
      <p>Clique em um dos <span className='highlight-2'>BOTOES</span> para alterar o valor do <span className='highlight'>CONTADOR</span></p>
    </div>
  );
}

export default Counter;