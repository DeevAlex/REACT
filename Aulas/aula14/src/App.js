import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

// useState - React Hook (Parte 1)

// componente sem estado
function App() {
  // const { foward } = this.state;

  const [foward, setFoward] = useState(false); // [<estado>, <coloca o valor nesse estado>] = useState(<valor padrão do estado>)
  const [contador, setContador] = useState(0);

  const fowardClass = foward ? 'foward' : '';

  const handleClick = () => {
    setFoward(!foward);
  };

  const addNumber = () => {
    setContador(contador + 2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${fowardClass}`} alt="logo" />
        <h1>Contador: {contador}</h1>
        <div className="containerFlex">
          <button type="button" onClick={handleClick}>
            foward {fowardClass}
          </button>
          <button type="button" onClick={addNumber}>
            Adicionar ao Contador
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
