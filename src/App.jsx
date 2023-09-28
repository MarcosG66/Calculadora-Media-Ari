import React, { useState, useEffect }from 'react';
import './App.css'



function App() {
  // Setando estados
  const [AP, setAP] = useState();
  const [AG, setAG] = useState();
  const [TD, setTD] = useState();
  const [media, setMedia] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const modeClass = isDarkMode ? 'dark-mode' : 'light-mode';
  const textClass = isDarkMode ? 'dark-mode-text' : 'light-mode-text';
  const borderClass = isDarkMode ? 'dark-mode-border' : 'light-mode-border';
  const inputClass = isDarkMode ? 'dark-mode-input' : 'light-mode-input';
  const boldClass = isDarkMode ? 'dark-mode-bold' : 'light-mode-bold';

    // Function to handle checkbox changes

  

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

const [isChecked, setIsChecked] = useState(
  localStorage.getItem('checkboxState') === 'true' || false
);

// Function to handle checkbox changes
const handleCheckboxChange = (event) => {
  const newValue = event.target.checked;
  setIsChecked(newValue);

  // Salvar o estado isDarkMode no localStorage
  localStorage.setItem('isDarkMode', newValue); 

  // Save the checkbox state in local storage
  localStorage.setItem('checkboxState', newValue);
};

useEffect(() => {
  // Load the checkbox state from local storage when the component mounts
  const savedValue = localStorage.getItem('isDarkMode');
  if (savedValue !== null) {
    setIsDarkMode(savedValue === 'true');
  }
}, []);


return (
  <div className={`container ${modeClass}`}>
    <h1 className={`title ${textClass}`}>Média de Matéria</h1>
    <h1 className={`media-final light-mode-text  ${textClass}`}>{media}</h1>
    <select className={`nome light-mode light-mode-border  ${borderClass} ${modeClass} ${boldClass}`}>
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
    <input
      type="checkbox"
      className="theme-checkbox"
      onClick={toggleDarkMode}
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
    <div className="input-container">
      <div className={`input-box light-mode ${modeClass}`}>
        <span className={`light-mode-text ${textClass}`}>AP</span>
        <input
          type="number"
          step="0.01"
          placeholder='AP'
          value={AP}
          onChange={handleAPChange}
          className={`light-mode-text ${textClass} ${inputClass}`}
        />
      </div>
      <div className={`input-box light-mode ${modeClass}`}>
        <span className={`light-mode-text ${textClass}`}>AG</span>
        <input
          type="number"
          step="0.01"
          placeholder='AG'
          value={AG}
          onChange={handleAGChange}
          className={`light-mode-text ${textClass} ${inputClass}`}
        />
      </div>
      <div className={`input-box light-mode ${modeClass}`}>
        <span className={`light-mode-text ${textClass}`}>TD</span>
        <input
          type="number"
          step="0.01"
          placeholder='TD'
          value={TD}
          onChange={handleTDChange}
          className={`light-mode-text ${textClass} ${inputClass}`}
        />
      </div>
    </div>
    <button onClick={calculateMedia} className='primary-btn'>Calcular Média</button>
    <div className="texto">

      <h2 className={`light-mode-text ${textClass}`}>Décimos !!!</h2>
      <p className={`light-mode-text ${textClass}`}>Caso tenha dificuldades em digitar o <span className={boldClass}>ponto final</span>, primeiro digite um número qualquer, depois disso, volte a seleção para <span className={boldClass}>antes</span> do número e insira o <span className={boldClass}>ponto final</span> antes dele, isso deve funcionar.</p> 
      <p className={`light-mode-text ${textClass}`}>Isso acontece porque originalmente foi programado para usar a <span className={boldClass}>vírgula</span>, porém alguns teclados só permitem o <span className={boldClass}>ponto final</span>. Isso é apenas um problema temporário que deve ser arrumado em uma atualização futura.</p>
      
      <h2 className={`light-mode-text ${textClass}`}>Como Funciona?</h2> 
      <p className={`light-mode-text ${textClass}`}>No momento em que o botão é pressionado, a equação da média (2 x <span className={boldClass}>AP</span>) + (3 x <span className={boldClass}>AG</span>) + <span className={boldClass}>TD</span> / 6 é executada levando em consideração o peso de cada prova determinado pelos números que as multiplicam.</p>
      
      <h2 className={`light-mode-text ${textClass}`}>Em que a escolha de  matéria influencia?</h2>
      <p className={`light-mode-text ${textClass}`}>a <span className={boldClass}>matéria</span> selecionada não altera nada no resultado da <span className={boldClass}>média</span>. É apenas um recurso para ajudar a guardar as notas e as médias por meio de um <span className={boldClass}>print</span>.</p>
      
      <h2 className={`light-mode-text ${textClass}`}>Oque é NaN?</h2>
      <p className={`light-mode-text ${textClass}`}><span className={boldClass}>NaN</span> significa <span className={boldClass}>Not a Number</span>, mas no caso dessa aplicação, <span className={boldClass}>NaN</span> é apenas um erro que ocorre quando algum dos espaços de nota está <span className={boldClass}>vazio</span> ou <span>inadequado</span>.</p>
      
    </div>
    <footer>
      <div className="text-box ">
        <h2>Adendos</h2>
        <p className={`light-mode-text ${textClass}`}>Essa aplicação foi desenvolvida por um aluno e não é de uso comercial e possui como único intuito prover maior praticidade para os alunos usuários na hora do cálculo de médias.</p>
        <p className={`light-mode-text ${textClass}`}>O código da aplicação está <a className={boldClass} href='https://github.com/MarcosG66/Calculadora-Media-Ari' >aqui</a>.</p>
        <p className={`light-mode-text ${textClass}`}>Feedback dos usuários e sugestões de alteração são muito bem-vindas.</p>
      </div>
    </footer>
  </div>
);
}

export default App; 