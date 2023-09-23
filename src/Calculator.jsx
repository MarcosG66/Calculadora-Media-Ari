import { useState } from 'react'
import React, { useReducer } from 'react';
import './App.css'


function Calculator() {
  // Definir valores com inputs (limitados a apenas 2 números e 1 decimal)
  const [AP, setAP] = useState();
  const [AG, setAG] = useState();
  const [TD, setTD] = useState();
  const [media, setMedia] = useState();

  // Handle changes for AP input
  const handleAPChange = (e) => {
    let value = parseFloat(e.target.value);
    // Limit to two decimal places and a maximum of 10.0
    value = Math.min(Math.round(value * 10) / 10, 10.0);
    setAP(value);
  };

  // Handle changes for AG input
  const handleAGChange = (e) => {
    let value = parseFloat(e.target.value);
    // Limit to two decimal places and a maximum of 10.0
    value = Math.min(Math.round(value * 10) / 10, 10.0);
    setAG(value);
  };

  // Handle changes for TD input
  const handleTDChange = (e) => {
    let value = parseFloat(e.target.value);
    // Limit to two decimal places and a maximum of 10.0
    value = Math.min(Math.round(value * 10) / 10, 10.0);
    setTD(value);
  };

  // Function to calculate the media and update the state
  const calculateMedia = () => {
    const newMedia = ((2 * AP) + (3 * AG) + TD) / 6;
    setMedia(newMedia.toFixed(1));
  };

  return (
    <div className='container'>
      <h1 className='title'>Média de Matéria</h1>
      <h1 className='media-final'>{media}</h1>
      <select className='nome'>
        <option>Clique aqui para escolher</option>
        <option>GRAMÁTICA</option>
        <option>INTERPRETAÇÃO TEXTUAL</option>
        <option>LITERATURA</option>
        <option>REDAÇÃO</option>
        <option>INGLÊS</option>
        <option>ÁLGEBRA</option>
        <option>GEOMETRIA</option>
        <option>MATEMÁTICA FUNDAMENTAL</option>
        <option>FÍSICA I</option>
        <option>FÍSICA II</option>
        <option>FÍSICO-QUIMICA </option>
        <option>QUIMICA-ORGÂNICA</option>
        <option>BIOLOGIA I</option>
        <option>BIOLOGIA II</option>
        <option>HISTÓRIA</option>
        <option>FILOSOFIA</option>
        <option>SOCIOLOGIA</option>
        <option>GEOGRAFIA</option>

      </select>
      <div className="input-container">
        <div className="input-box">
          <span>AP</span>
          <input
            type="number"
            step="0.01"
            placeholder='AP'
            value={AP}
            onChange={handleAPChange}
          />
        </div>
        <div className="input-box">
          <span>AG</span>
          <input
            type="number"
            step="0.01"
            placeholder='AG'
            value={AG}
            onChange={handleAGChange}
          />
        </div>
        <div className="input-box">
          <span>TD</span>
          <input
            type="number"
            step="0.01"
            placeholder='TD'
            value={TD}
            onChange={handleTDChange}
          />
        </div>
      </div>
      <button onClick={calculateMedia} className='primary-btn'>Calcular Média</button>
      <div className="texto">
        <h2>Como Funciona?</h2>
        <p>No momento em que o botão é pressionado, a equação da média (2 x <span>AP</span>) + (3 x <span>AG</span>) + <span>TD</span> / 6 é executada levando em consideração o peso de cada prova determinado pelos números que as multiplicam.</p>
        <h2>Em que a escolha de  matéria influencia?</h2>
        <p>a <span>matéria</span> selecionada não altera nada no resultado da <span>média</span>. É apenas um recurso para ajudar a guardar as notas e as médias por meio de um <span>print</span>.</p>
        <h2>Oque é NaN?</h2>
        <p><span>NaN</span> significa <span>Not a Number</span>, mas no caso dessa aplicação, <span>NaN</span> é apenas um erro que ocorre quando algum dos espaços de nota está <span>vazio</span> ou <span>inadequado</span>.</p>
      </div>
      <footer>
        <div className="text-box">
          <h2>Adendos</h2>
          <p>Essa aplicação foi desenvolvida por um aluno e não é de uso comercial e possui como único intuito prover maior praticidade para os alunos usuários na hora do cálculo de médias.</p>
          <p>O código da aplicação está em <a>https://MarcosG66.github.io/Calculadora-Media-Ari</a>. Feedback dos usuários e sugestões de alteração são muito bem-vindas.</p>
        </div>
      </footer>

    </div>
  );
}

export default Calculator;