import { useState } from 'react'
import React, { useReducer } from 'react';
import './App.css'


function Counter() {
  // Usando o useReducer com o redutor e o estado inicial
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='container'>
      d
    </div>
  );
}

export default Counter;
