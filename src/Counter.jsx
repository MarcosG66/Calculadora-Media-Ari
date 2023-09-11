import { useState } from 'react'
import React, { useReducer } from 'react';
import './Counter.css'

// Definindo o estado inicial do contador
const initialState = { count: 0 };

// Definindo o redutor que irá atualizar o estado do contador
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      // Quando a ação é 'increment', aumentamos o contador em 1
      return { count: state.count + 1 };
    case 'decrement':
      // Quando a ação é 'decrement', diminuímos o contador em 1
      return { count: state.count - 1 };
    default:
      // Se a ação não for reconhecida, retornamos o estado atual
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
        {/* Quando o botão 'SUBTRAIR' é clicado, chamamos dispatch com a ação 'decrement' */}
        <button onClick={() => dispatch({ type: 'decrement' })}><span>SUBTRAIR</span></button>
        {/* Quando o botão 'SOMAR' é clicado, chamamos dispatch com a ação 'increment' */}
        <button onClick={() => dispatch({ type: 'increment' })}><span>SOMAR</span></button>
      </div>
      <p>Clique em um dos <span className='highlight-2'>BOTOES</span> para alterar o valor do <span className='highlight'>CONTADOR</span></p>
    </div>
  );
}

export default Counter;
